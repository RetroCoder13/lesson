function openDialogue(element){
    let textElement = element.children[0]
    textElement.style.left = `calc(100% - ${textElement.offsetWidth}px)`
}

function closeDialogue(element){
    let textElement = element.children[0]
    textElement.style.left = 'calc(100% - 50px)'
}