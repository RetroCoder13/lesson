var increment = 0
var totalIncrement = 0
var spinning = [true,true,true]
var stopSpin = false

document.querySelectorAll("div.spinner>img").forEach(function(n){
    n.style.transform = `translateY(0px)`
})

function update(){
    if(totalIncrement % 210 == 0 && stopSpin){
        spinning[spinning.findIndex(function(n){return n == true})] = false
        stopSpin = false
    }
    increment = 20
    totalIncrement += increment
    document.querySelectorAll("div.spinner").forEach(function(s){
        if(spinning[parseInt(s.id)]){
            s.querySelectorAll("img").forEach(function(n){
                n.style.transform = `translateY(${parseInt(n.style.transform.replaceAll("translateY(","").replaceAll("px)","")) - increment}px)`
                if(n.getBoundingClientRect().y < -200){
                    n.style.transform = `translateY(${parseInt(n.style.transform.replaceAll("translateY(","").replaceAll("px)","")) + 1260}px)`
                }
            })
        }
    })

    requestAnimationFrame(update)
}

function randomise(){
    document.querySelectorAll("div.spinner").forEach(function(s){
        let random = Math.round(Math.random()*6) * 210
        s.querySelectorAll("img").forEach(function(n){
            n.style.transform = `translateY(${parseInt(n.style.transform.replaceAll("translateY(","").replaceAll("px)","")) - random}px)`
            if(n.getBoundingClientRect().y < -200){
                n.style.transform = `translateY(${parseInt(n.style.transform.replaceAll("translateY(","").replaceAll("px)","")) + 1260}px)`
            }
        })
    })
}

buttons = document.querySelectorAll("button")
buttons[0].onclick = function(){
    stopSpin = true
}

buttons[1].onclick = function(){
    increment = 0
    totalIncrement = 0
    spinning = [true,true,true]
    stopSpin = false
    document.querySelectorAll("div.spinner").forEach(function(s){
        s.querySelectorAll("img").forEach(function(n){
            n.style.transform = `translateY(0px)`
        })
    })
    randomise()
}

randomise()
update()