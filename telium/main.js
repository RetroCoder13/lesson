var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")

var inputManager = new InputManager()

var lockIcon = new Image()
lockIcon.src = "./lock.svg"

var moduleManager = new ModuleManager()
moduleManager.addModule(new Module("1",475,25,50,50))
moduleManager.addModule(new Module("2",375,125,50,50))
moduleManager.addModule(new Module("3",575,125,50,50))
moduleManager.addModule(new Module("4",275,225,50,50))
moduleManager.addModule(new Module("5",375,225,50,50))
moduleManager.addModule(new Module("6",575,225,50,50))
moduleManager.addModule(new Module("7",675,225,50,50))
moduleManager.addModule(new Module("8",175,325,50,50))
moduleManager.addModule(new Module("9",275,325,50,50))
moduleManager.addModule(new Module("10",375,325,50,50))
moduleManager.addModule(new Module("11",575,325,50,50))
moduleManager.addModule(new Module("12",675,325,50,50))
moduleManager.addModule(new Module("13",775,325,50,50))
moduleManager.addModule(new Module("14",175,425,50,50))
moduleManager.addModule(new Module("15",375,425,50,50))
moduleManager.addModule(new Module("16",575,425,50,50))
moduleManager.addModule(new Module("17",775,425,50,50))

moduleManager.addConnection(1,2)
moduleManager.addConnection(1,3)
moduleManager.addConnection(2,4)
moduleManager.addConnection(2,5)
moduleManager.addConnection(3,6)
moduleManager.addConnection(3,7)
moduleManager.addConnection(4,5)
moduleManager.addConnection(4,8)
moduleManager.addConnection(4,9)
moduleManager.addConnection(5,6)
moduleManager.addConnection(5,10)
moduleManager.addConnection(6,7)
moduleManager.addConnection(6,11)
moduleManager.addConnection(7,12)
moduleManager.addConnection(7,13)
moduleManager.addConnection(8,14)
moduleManager.addConnection(9,10)
moduleManager.addConnection(9,14)
moduleManager.addConnection(9,15)
moduleManager.addConnection(10,15)
moduleManager.addConnection(11,12)
moduleManager.addConnection(11,16)
moduleManager.addConnection(12,16)
moduleManager.addConnection(12,17)
moduleManager.addConnection(13,17)

moduleManager.initialise()

function update(){
    ctx.clearRect(0,0,1000,500)

    moduleManager.update(inputManager)

    requestAnimationFrame(update)
}

requestAnimationFrame(update)