class Grid{
    constructor(rows,columns,size,mode){
        this.rows = rows
        this.columns = columns
        this.size = size

        this.mode = mode

        this.eggImage = new Image()
        this.eggImage.src = "egg.svg"

        this.eggs = []
    }

    displayGrid(){
        for(let i=0;i<this.rows+1;i++){
            ctx.beginPath()
            ctx.moveTo(i*this.size,0)
            ctx.lineTo(i*this.size,canvas.height)
            ctx.stroke()
            ctx.closePath()
        }
        for(let i=0;i<this.columns+1;i++){
            ctx.beginPath()
            ctx.moveTo(0,i*this.size)
            ctx.lineTo(canvas.width,i*this.size)
            ctx.stroke()
            ctx.closePath()
        }
    }

    update(inputManager){
        if(this.mode == 0){
            if(!isNaN(Math.floor(inputManager.getMouse().pos[0]/this.size)) && !isNaN(Math.floor(inputManager.getMouse().pos[1]/this.size))){
                let position = [Math.floor(inputManager.getMouse().pos[0]/this.size),Math.floor(inputManager.getMouse().pos[1]/this.size)]

                if(!JSON.stringify(this.eggs).includes(JSON.stringify(position))){
                    this.eggs.push(position)
                }
                // ctx.fillRect(position[0]*this.size,position[1]*this.size,this.size,this.size)
                ctx.drawImage(this.eggImage,position[0]*this.size,position[1]*this.size,this.size,this.size)
            }
        } else {
            if(!isNaN(Math.floor(inputManager.getMouse().pos[0]/this.size)) && !isNaN(Math.floor(inputManager.getMouse().pos[1]/this.size))){
                let position = [Math.floor(inputManager.getMouse().pos[0]/this.size),Math.floor(inputManager.getMouse().pos[1]/this.size)]
                let colour = 255

                for(let i=0;i<this.eggs.length;i++){
                    colour = Math.min(Math.sqrt((this.eggs[i][0]-position[0])**2+(this.eggs[i][1]-position[1])**2),colour)
                }
                if(colour > 9){
                    colour = 9
                }
                ctx.fillStyle = `#${Math.round(colour)}00`
                if(JSON.stringify(this.eggs).includes(JSON.stringify(position))){
                    ctx.drawImage(this.eggImage,position[0]*this.size,position[1]*this.size,this.size,this.size)
                } else {
                    ctx.fillRect(position[0]*this.size,position[1]*this.size,this.size,this.size)
                }
            }
        }
    }
}