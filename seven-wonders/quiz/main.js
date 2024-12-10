var questionElement = document.querySelector("#quiz #question")
var answerElements = document.querySelectorAll("#quiz button")
var correctElement = document.querySelector("#score #correct")
var incorrectElement = document.querySelector("#score #incorrect")

var request = new XMLHttpRequest()
request.open("GET",`./questions.json`,false);
request.send()
var questions = JSON.parse(request.responseText)
console.log(questions)

function newQuestion(){
    attempts = 0
    for(let i=0;i<answerElements.length;i++){
        answerElements[i].disabled = false
    }
    let questionNumber = Math.ceil(Math.random()*Object.keys(questions).length)
    let question = questions[questionNumber]["question"]
    let answers = [questions[questionNumber]["correctAnswer"], questions[questionNumber]["answer1"], questions[questionNumber]["answer2"], questions[questionNumber]["answer3"]]
    correctAnswerPosition = parseInt(Math.random()*4);
    correctAnswer = false;

    questionElement.innerHTML = question
    for(let i=0;i<answerElements.length;i++){
        if(correctAnswerPosition==i){
            answerElements[i].innerHTML = answers[0]
            answerElements[i].id = "answer"
            correctAnswer = true;
        } else {
            answerElements[i].id = ""
            if(correctAnswer==true){
                answerElements[i].innerHTML = answers[i]
            } else {
                answerElements[i].innerHTML = answers[i+1]
            }
        };
    };
}

var attempts = 0
function answer(element){
    if(element.id == "answer"){
        correctElement.innerHTML = parseInt(correctElement.innerHTML) + 1
        newQuestion()
    } else {
            incorrectElement.innerHTML = parseInt(incorrectElement.innerHTML) + 1
            element.disabled = true
            attempts++
        if(attempts >= 3) {
            newQuestion()
            
        }
    }
}

newQuestion()