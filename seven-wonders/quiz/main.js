var questionElement = document.querySelector("#quiz #question")
var answerElements = document.querySelectorAll("#quiz button")

function newQuestion(question,answers){
    questionElement.innerHTML = question

    for(let i=0;i<4;i++){
        answerElements[i].innerHTML = answers[i]
    }
}