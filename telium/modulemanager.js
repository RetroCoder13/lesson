class ModuleManager{
    constructor(){
        this.player = 0
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

    update(){
        for(let i=0;i<this.connectors.length;i++){
            ctx.beginPath()
            ctx.moveTo(this.modules[this.connectors[i][0]].x+this.modules[this.connectors[i][0]].w/2,this.modules[this.connectors[i][0]].y+this.modules[this.connectors[i][0]].h/2)
            ctx.lineTo(this.modules[this.connectors[i][1]].x+this.modules[this.connectors[i][1]].w/2,this.modules[this.connectors[i][1]].y+this.modules[this.connectors[i][1]].h/2)
            ctx.stroke()
            ctx.closePath()
        }
        for(let i=0;i<this.modules.length;i++){
            this.modules[i].render(i==this.player)
        }
    }
}