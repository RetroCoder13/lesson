class Module{
    constructor(name,x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.name = name
        this.queen = false
        this.workerAlien = false
        this.colour = "#555"
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

    render(player){
        if(player){
            ctx.fillStyle = "#00F"
        } else if(this.queen){
            ctx.fillStyle = "#F00"
        } else if(this.workerAlien){
            ctx.fillStyle = "#FF0"
        } else {
            ctx.fillStyle = this.colour
        }
        ctx.fillRect(this.x,this.y,this.w,this.h)
        ctx.fillText(this.name,this.x,this.y,this.w)
    }
}

class VentilationModule extends Module{
    constructor(name,x,y,w,h){
        super(name,x,y,w,h)
        this.colour = "#777"
        this.locked= false
    }

    setLock(state){
        this.locked = state
    }
}