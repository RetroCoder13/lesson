var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")

function update(){
    ctx.fillColor = "#000"
    ctx.fillRect(0,0,100,100)
    requestAnimationFrame(update)
}

requestAnimationFrame(update)