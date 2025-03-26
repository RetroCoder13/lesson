var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")

var moduleManager = new ModuleManager()
moduleManager.addModule(new Module("1",10,10,50,50))

function update(){
    ctx.clearRect(0,0,1000,500)
    moduleManager.update()
    requestAnimationFrame(update)
}

requestAnimationFrame(update)