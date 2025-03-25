class Module{
    constructor(name,type){
        this.name = name
        this.queen = false
        this.workerAlien = false
        if(type == "shaft" || type == "panel" || type == "normal"){
            this.type = type
        } else {
            this.type = "normal"
        }
    }

    setQueen(state){
        this.queen = state
    }

    setWorkerAlien(state){
        this.workerAlien = state
    }

    render(x,y,w,h){
        if(this.queen){
            ctx.fillColor = "#F00"
        } else if (this.workerAlien){
            ctx.fillColor = "#FF0"
        } else {
            ctx.fillColor = "#0F0"
        }
        ctx.fillRect(x,y,w,h)
        ctx.fillText(this.name,x,y,w)
    }
}