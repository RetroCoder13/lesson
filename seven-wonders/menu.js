var menuButton = document.querySelector("#menuButton img")
var menu = document.querySelector("#menu")

var toggle = false
menuButton.onclick = function(e){
    toggle = !toggle
    if(toggle){
        menu.style.animation = "pop-in .5s forwards"
    } else {
        menu.style.animation = "pop-out .5s forwards"
    }
}