var menuButton = document.querySelector("#menuButton img")
var menu = document.querySelector("#menu")

window.onresize = function(){
    resizeMenu()
}

var toggle = false
menuButton.onclick = function(e){
    toggleMenu()
}

document.onscroll = function(){
    if(toggle){
        toggleMenu()
    }
}

function toggleMenu(){
    toggle = !toggle
    if(toggle){
        // menu.style.animation = "pop-in .5s forwards"
        menu.style.right = "0px"
    } else {
        menu.style.right = "calc(0px - var(--menuWidth))"
    }
}

function resizeMenu(){
    menu.style.height = `calc(${document.documentElement.offsetHeight}px - 30px`
}

resizeMenu()