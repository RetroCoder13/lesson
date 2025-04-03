var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var button = document.querySelector('button#guess')
button.addEventListener('click',function(){
    grid.mode = 1
    inputManager.mouse.pos = [,]
    ctx.clearRect(0,0,canvas.width,canvas.height)
    grid.displayGrid()
})

ctx.imageSmoothingEnabled = false;

var scale = 2

canvas.style.width = "500px"
canvas.style.height = "500px"
canvas.width = 500*scale
canvas.height = 500*scale

ctx.scale(scale,scale)

var grid = new Grid(10,10,50,0)
var inputManager = new InputManager()

grid.displayGrid()

function update(){
    grid.update(inputManager)
    requestAnimationFrame(update)
}

update()