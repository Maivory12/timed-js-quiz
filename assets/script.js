var startPage = document.querySelector(`.start-page`)
var startBtn = document.getElementById(`start-quiz`);
var submitBtn = document.getElementById(`submit`);
var submitScore = document.querySelector(`.submit-score`);
var retry = document.querySelector(`.retry`);
var results = document.getElementById(`results`);
var timeContainer = document.getElementById(`time-container`)
var questionBox = document.getElementById(`question-box`)
var answerEls = document.querySelectorAll(`.selection`)
var questionEl = document.getElementById(`question`)
var aAnswer  = document.getElementById(`aAnswer`)
var bAnswer = document.getElementById(`bAnswer`)
var cAnswer = document.getElementById(`cAnswer`)
var dAnswer = document.getElementById(`dAnswer`)
var points = document.getElementById(`points`)
var leaderBoard = document.getElementById(`leaderboard`)
var initials = document.getElementById(`initials`)
var userScore = document.getElementById(`userScore`)
var highScoreList = document.getElementById(`high-score-list`)
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
        question:`Using ___ statement is how you test for a specific condition.`,
        a:`A.  Select`,
        b:`B.  If`,
        c:`C.  Switch`,
        d:`D.  For`,
        correct:`b`,

    },
    {
        question:`The ____ method of an Array object adds and/or removes elements from an array.`,
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

//If start quiz button clicked, show questions and timer.
startBtn.onclick = ()=>{
    startPage.classList.add(`hide`);
    questionBox.classList.remove(`hide`);
    timeContainer.classList.remove(`hide`);
    setTime();
}
//When submit score is clicked, then high scores show. 
retry.onclick = (event)=>{
    startPage.classList.add(`hide`);
    
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

//Function to have no answer selected upon initial show of questions
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

// Event listener for submit button + add score for correct answer
submitBtn.addEventListener(`click`, () => {
    var answer = getSelected()
    if (answer) {
        if (answer === quizQuestions[currentQuestion].correct) {
            console.log(score++)
        } else {  
            console.log("is not correct")
            remainingTime -= 3
    }

//This cycles through question after submit click to the end of quiz and displays results page on last answer submit
        currentQuestion++
        if(currentQuestion < quizQuestions.length) {
            showQuiz()
        } else {
            questionBox.classList.add(`hide`);
            timeContainer.classList.add(`hide`);
            results.classList.remove(`hide`);
            leaderBoard.classList.remove(`hide`);
            points.innerHTML = "Points:" + score + "/ out of 5."
            
            
        }

    }
})

//Functioin for the timer
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      remainingTime--;
      timeEl.textContent = remainingTime;
      if(remainingTime === 0) {
        // Stops execution of action at set interval and shows results page when condition is met.
        clearInterval(timerInterval);
        questionBox.classList.add(`hide`);
        timeContainer.classList.add(`hide`);
        results.classList.remove(`hide`);
        leaderBoard.classList.remove(`hide`);
        points.innerHTML = "Points:" + score + "/ out of 5."
       
      }
  
    }, 1000);
  }

//Save and show high score
function saveHighScore() {
var highScore = {
    initials: initials.value,
    userScore: userScore.value,
};

localStorage.setItem("highScore", JSON.stringify(highScore));
}

function renderHighScore() {
    var lastHighScore = JSON.parse(localStorage.getItem("highScore"));
    if (lastHighScore !== null) {
        console.log(saveHighScore)
        highScoreList.innerHTML = `<ol>${lastHighScore.initials} ${lastHighScore.userScore}</ol>`;
        
    } else {
        return;
    }

}

submitScore.addEventListener("click", function(event){
    event.preventDefault();
    saveHighScore();
    renderHighScore();

});

function init() {
    renderHighScore();
}

init();