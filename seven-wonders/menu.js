var menuButton = document.querySelector("#menuButton img")
var menu = document.querySelector("#menu")

var toggle = false
menuButton.onclick = function(e){
    toggle = !toggle
    if(toggle){
        // menu.style.animation = "pop-in .5s forwards"
        menu.style.right = "0px"
    } else {
        menu.style.right = "calc(0px - var(--menuWidth))"
    }
}