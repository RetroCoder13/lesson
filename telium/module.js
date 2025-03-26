class Module{
    constructor(name,x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.name = name
        this.queen = false
        this.workerAlien = false
    }

    setQueen(state){
        this.queen = state
    }

    setWorkerAlien(state){
        this.workerAlien = state
    }

    setPosition(x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }

    render(){
        if(this.queen){
            ctx.fillStyle = "#F00"
        } else if(this.workerAlien){
            ctx.fillStyle = "#FF0"
        } else {
            ctx.fillStyle = "#555"
        }
        ctx.fillRect(this.x,this.y,this.w,this.h)
        ctx.fillText(this.name,this.x,this.y,this.w)
    }
}

class VentilationModule extends Module{

}