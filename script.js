var startPage = document.querySelector(`.start-page`)
var startBtn = document.getElementById(`start-quiz`);
var submitBtn = document.getElementById(`submit`);
var submitScore = document.getElementById(`submit-score`);
var results = document.getElementById(`results`)
var timeContainer = document.getElementById(`time-container`)
var questionBox = document.getElementById(`question-box`)
var answerEls = document.querySelectorAll(`.selection`)
var questionEl = document.getElementById(`question`)
var aAnswer  = document.getElementById(`aAnswer`)
var bAnswer = document.getElementById(`bAnswer`)
var cAnswer = document.getElementById(`cAnswer`)
var dAnswer = document.getElementById(`dAnswer`)
var points = document.getElementById(`points`)
var currentQuestion = 0;
var score = 0;
var remainingTime = 60;
var timeEl = document.getElementById(`time`)
var quizQuestions =[
    {
        question: `What are variables used for in JavaScript Programs?`,
        a:`A. Storing numbers, dates, or other values`,
        b:`B. Varying randomly`,
        c:`C. Causing high-school algebra flashbacks`,
        d:`D. None of the above`,
        correct: "a",
    },
    {
        question: `Which is the correct way to write a JavaScript array?`,
        a:`A. var txt = new Array(1:” Tim”,2:” Kim”,3:” Jim”)`,
        b:`B. var txt = new Array_1=(“Tim”)2=(“Kim”)3=(“Jim”)`,
        c:`C. var txt = new Array(“Tim”,” Kim”,” Jim”)`,
        d:`D. var txt = new Array=” Tim”,” Kim”,” Jim”`,
        correct: `c`,
    },
    {
        question:`Using _______ statement is how you test for a specific condition.`,
        a:`A.  Select`,
        b:`B.  If`,
        c:`C.  Switch`,
        d:`D.  For`,
        correct:`b`,

    },
    {
        question:`The _______ method of an Array object adds and/or removes elements from an array.`,
        a:`A.  Reverse`,
        b:`B.   Shift`,
        c:`C.  Slice`,
        d:`D.  Splice`,
        correct: `d`, 
    },
    {
        question:`Is it possible to nest functions in JavaScript?`,
        a:`A. True`,
        b:`B. False`,
        correct: `a` 
    }


];

//If start quiz button clicked
startBtn.onclick = ()=>{
    startPage.classList.add(`hide`);
    questionBox.classList.remove(`hide`);
    timeContainer.classList.remove(`hide`);
    setTime();
}

// function to show questions for quiz
showQuiz()
function showQuiz(){
    deselectAnswers()
    var currentQuestionData = quizQuestions[currentQuestion]
    questionEl.innerText = currentQuestionData.question
    aAnswer.innerText = currentQuestionData.a
    bAnswer.innerText = currentQuestionData.b
    cAnswer.innerText = currentQuestionData.c
    dAnswer.innerText = currentQuestionData.d
}  
//
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
//Function to select answer
function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

