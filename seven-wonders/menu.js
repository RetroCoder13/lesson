var menuButton = document.querySelector("#menuButton img")
var menu = document.querySelector("#menu")

menu.style.height = `calc(${document.body.offsetHeight}px - 30px`

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