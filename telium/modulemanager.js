class ModuleManager{
    constructor(){
        this.player = 0
        this.playerLast = 0
        this.queen = Math.round(Math.random()*15+1)
        this.modules = []
        this.connectors = []
    }

    addModule(module,a,b,c,d){
        this.modules.push(module)
    }

    addConnection(id1,id2){
        this.connectors.push([id1-1,id2-1])
    }

    setQueen(n,state){
        this.modules[n].setQueen(state)
    }

    setWorkerAlien(n,state){
        this.modules[n].setWorkerAlien(state)
    }

    setPosition(n,x,y,w,h){
        this.modules[n].setPosition(x,y,w,h)
    }

    moveQueen(){
        let options = []
        for(let i=0;i<this.connectors.length;i++){
            if((this.connectors[i][0] == this.queen && this.connectors[i][1] != this.player && this.connectors[i][1] != this.playerLast && !this.modules[this.connectors[i][1]].locked) || (this.connectors[i][1] == this.queen && this.connectors[i][0] != this.player && this.connectors[i][0] != this.playerLast && !this.modules[this.connectors[i][0]].locked)){
                options.push(this.connectors[i])
            }
        }

        if(options.length == 0){
            document.write("You won")
        } else {
            let option = options[Math.round(Math.random()*(options.length-1))]

            if(option[0] == this.queen){
                this.queen = option[1]
            } else {
                this.queen = option[0]
            }
        }
    }

    initialise(){
        let workers = 3
        let vents = 3
        let list = []
        for(let i=1;i<this.modules.length;i++){
            list.append(i)
        }
        for(let i=0;i<6;i++){
            let random = Math.round(Math.random()*list.length)
            if(workers<3){
                this.modules[list[random]].setWorkerAlien(true)
                workers--
            }
            list.pop(random)
        }
    }

    update(inputManager){
        for(let i=0;i<this.connectors.length;i++){
            ctx.lineWidth = "10"
            if(this.connectors[i][0] == this.player || this.connectors[i][1] == this.player){
                ctx.strokeStyle = "#AAF"
            } else {
                ctx.strokeStyle = "#AAA"
            }
            ctx.beginPath()
            ctx.moveTo(this.modules[this.connectors[i][0]].x+this.modules[this.connectors[i][0]].w/2,this.modules[this.connectors[i][0]].y+this.modules[this.connectors[i][0]].h/2)
            ctx.lineTo(this.modules[this.connectors[i][1]].x+this.modules[this.connectors[i][1]].w/2,this.modules[this.connectors[i][1]].y+this.modules[this.connectors[i][1]].h/2)
            ctx.stroke()
            ctx.closePath()
        }
        for(let i=0;i<this.modules.length;i++){
            if(inputManager.getMouse().pos[0] > this.modules[i].x
            && inputManager.getMouse().pos[0] < this.modules[i].x + this.modules[i].w
            && inputManager.getMouse().pos[1] > this.modules[i].y
            && inputManager.getMouse().pos[1] < this.modules[i].y + this.modules[i].h
            && inputManager.getMouse().click){
                // for(let j=0;j<this.modules.length;j++){
                    if((JSON.stringify(this.connectors).includes(JSON.stringify([this.player,i])) && !this.modules[this.connectors[i][1]].locked) || (JSON.stringify(this.connectors).includes(JSON.stringify([i,this.player])) && !this.modules[this.connectors[i][1]].locked)){
                        if(this.queen == i){
                            this.playerLast = this.player
                        } else {
                            this.playerLast = i
                        }
                        this.player = i
                        let that = this
                        setTimeout(function(){that.moveQueen()},100)
                    }
                    // break
                // }
            }
            this.modules[i].render(i==this.player,i==this.queen,false,this.modules[i].locked)
        }
    }
}