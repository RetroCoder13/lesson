var increment = 0
var totalIncrement = 0
var spinning = [true,true,true]
var stopSpin = false

document.querySelectorAll("div.spinner>img").forEach(function(n){
    n.style.transform = `translateY(0px)`
})

function update(){
    if(totalIncrement % 1000 == 0){
        spinning[spinning.findIndex(function(n){return n == true})] = false
        stopSpin = false
    }
    increment = 10
    totalIncrement += increment
    document.querySelectorAll("div.spinner").forEach(function(s){
        if(spinning[parseInt(s.id)]){
            s.querySelectorAll("img").forEach(function(n){
                n.style.transform = `translateY(${parseInt(n.style.transform.replaceAll("translateY(","").replaceAll("px)","")) - increment}px)`
                if(n.getBoundingClientRect().y < -200){
                    n.style.transform = `translateY(${parseInt(n.style.transform.replaceAll("translateY(","").replaceAll("px)","")) + 1250}px)`
                }
            })
        }
    })

    requestAnimationFrame(update)
}

function randomise(){
    document.querySelectorAll("div.spinner").forEach(function(s){
        let random = Math.round(Math.random()*6) * 200
        s.querySelectorAll("img").forEach(function(n){
            n.style.transform = `translateY(${parseInt(n.style.transform.replaceAll("translateY(","").replaceAll("px)","")) - random}px)`
            if(n.getBoundingClientRect().y < -200){
                n.style.transform = `translateY(${parseInt(n.style.transform.replaceAll("translateY(","").replaceAll("px)","")) + 1250}px)`
            }
        })
    })
}

document.querySelector("button").onclick = function(){
    stopSpin = true
}

randomise()
update()