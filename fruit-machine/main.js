var increment = 0
var totalIncrement = 0
var spinning = [true,true,true]
var stopSpin = false
var calculateScore = true
var score = 1

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

    if(JSON.stringify(spinning) == JSON.stringify([false,false,false]) && calculateScore){
        calculateScore = false
        let items = [itemVisible(0),itemVisible(1),itemVisible(2)]
        if(items[0] == "bell" && items[1] == "bell" && items[2] == "bell"){
            score += 5
        } else if(items[0] == "skull" && items[1] == "skull" && items[2] == "skull"){
            score = 0
        } else if((items[0] == "skull" && items[1] == "skull") || (items[0] == "skull" || items[2] == "skull") && (items[1] == "skull" && items[2] == "skull")){
            score -= 1
        }  else if(items[0] == items[1] == items[2]){
            score += 1
        } else if(items[0] == items[1] || items[0] == items[2] || items[1] == items[2]){
            score += .5
        }
        score = score.toFixed(1)
        document.getElementById('score').innerHTML = `Score: ${score}`
    }

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
    calculateScore = true
    score -= 0.2
    document.querySelectorAll("div.spinner").forEach(function(s){
        s.querySelectorAll("img").forEach(function(n){
            n.style.transform = `translateY(0px)`
        })
    })
    randomise()
}

function itemVisible(slot){
    let images = document.getElementById(slot).querySelectorAll('img')
    let containerRect = document.getElementById(slot).getBoundingClientRect()
    for(let i=0;i<images.length;i++){
        let imageRect = images[i].getBoundingClientRect()
        if(imageRect.top >= containerRect.top && imageRect.left >= containerRect.left && imageRect.bottom <= containerRect.bottom && imageRect.right <= containerRect.right){
            return images[i].name
        }
    }
}

randomise()
update()