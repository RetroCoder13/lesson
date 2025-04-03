class InputManager{
    constructor(){
        this.mouse = {pos:[,],click:false}
        this.keys = {}
        var that = this
        canvas.addEventListener('mousedown',function(e){
            that.mouse.pos = [e.offsetX ,e.offsetY]
            that.mouse.click = true
        })

        canvas.addEventListener('mouseup', function(e){
            that.mouse.click = false
        })

        canvas.addEventListener('keydown',function(e){
            that.keys[e.key] = true
        })
        canvas.addEventListener('keyup',function(e){
            that.keys[e.key] = false
        })
    }

    getKey(key){
        return this.keys[key]
    }

    getMouse(){
        return this.mouse
    }
}