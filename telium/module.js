class Module{
    constructor(name,x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.name = name
        this.colour = "#555"
    }

    setPosition(x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }

    render(player,queen,workerAlien,locked){
        if(player){
            ctx.fillStyle = "#00F"
        } else if(queen){
            ctx.fillStyle = "#F00"
        } else if(workerAlien){
            ctx.fillStyle = "#FF0"
        } else {
            ctx.fillStyle = this.colour
        }
        ctx.fillRect(this.x,this.y,this.w,this.h)
        ctx.fillText(this.name,this.x,this.y,this.w)

        if(locked){
            ctx.drawImage(lockIcon,this.x,this.y,this.w,this.h)
        }
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