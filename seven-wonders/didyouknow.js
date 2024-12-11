function openDialogue(element){
    let textElement = element.children[0]
    textElement.style.left = `calc(100% - ${textElement.offsetWidth}px)`
}

function closeDialogue(element){
    let textElement = element.children[0]
    textElement.style.left = 'calc(100% - 50px)'
}

facts = [
    "Did you know?"
]

window.onload = function(){
    let textElement = document.querySelector('#did-you-know #text')
    textElement.innerHTML = facts[0]
}