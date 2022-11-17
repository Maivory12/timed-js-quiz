var startBtn = document.querySelector("#start-quiz");
var submitBtn = document.querySelector("#submit");
var submitScore = document.querySelector("submit-score button");
var row = document.querySelector(".row")
var results = document.querySelector(".results")
var startPage = document.querySelector(".start-page")
var questionBox = document.querySelector("#question-box")
var timeContainer = document.querySelector("#time-container")


//If start quiz button clicked
startBtn.onclick = ()=>{
    startPage.classList.add(`hide`);
    questionBox.classList.remove(`hide`)
    timeContainer.classList.remove(`hide`)
}