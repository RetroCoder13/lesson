class ModuleManager{
    constructor(){
        this.modules = []
    }

    addModule(module,a,b,c,d){
        this.modules.push(module)
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
        for(let i=0;i<this.modules.length;i++){
            this.modules[i].render()
        }
    }
}