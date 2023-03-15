/* To do list:

set time variable
create timer with set interval
retrieve high scores from local storage and display in list items
store high score into local storage
create start button
start button makes instructions disappear
start button makes random question appear
validate correct response and incorrect response
    display correct/ incorrect after response
    go to new question after response
Create input box to put in initials after game ends
Make incorrect guess subtract 5 seconds from the clock
pause clock when game ends
make score = time remaining
create a reset high scores button

*/

var highScoreList = document.getElementById("high-score-list");
var timeLeftSpan = document.getElementById("time-left-span");
var startButton = document.getElementById("start-button");
var instructions = document.getElementById("instructions");
var questionCard = document.getElementById("question-card");
var questionText = document.getElementById("question-text");
var answerChoices = document.getElementById("answer-choices");
var validateAnswer = document.getElementById("validate-answer");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");


var timerCount;
var isPlaying = false;
var timer;
var questionsAnswered = 0;
var totalNumberOfQuestions = 10;


function init(){
    getHighScores();
}

function getHighScores(){
    console.log("highs scores displayed!");
}

function startGame(){
    timerCount = 60;
    isPlaying = true;
    startButton.disabled = true;
    startTimer();
    hideInstructions();
    question1();
}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timeLeftSpan.textContent = timerCount;
        if (timerCount === 0 || questionsAnswered === totalNumberOfQuestions){
            clearInterval(timer);
            gameOver();
        }
    }, 1000)
}

function gameOver(){
    isPlaying = false;
}

function hideInstructions(){
    instructions.classList.add("hidden");
    questionCard.classList.remove("hidden");

}

function question1(){
    questionText.textContent = "This is Question 1. Answer it dummy!";
    answer1.textContent = "This is answer 1";
    answer1.classList.add("correct1");
    answer2.textContent = "This is answer 2";
    answer2.classList.add("incorrect1");
    answer3.textContent = "This is answer 3";
    answer3.classList.add("incorrect1");
    answer4.textContent = "This is answer 4";
    answer4.classList.add("incorrect1");
    
    
}

function question2(){
    answer1.classList.remove("correct1");
    answer2.classList.remove("incorrect1");
    answer3.classList.remove("incorrect1");
    answer4.classList.remove("incorrect1");

    questionText.textContent = "This is Question 2. Answer it dummy!";
    answer1.textContent = "This is answer 1";
    answer1.classList.add("incorrect2");
    answer2.textContent = "This is answer 2";
    answer2.classList.add("correct2");
    answer3.textContent = "This is answer 3";
    answer3.classList.add("incorrect2");
    answer4.textContent = "This is answer 4";
    answer4.classList.add("incorrect2");
    
    
}

function checkAnswer(event){
   console.log(event.target);

   if(event.target.classList.contains("correct1")){
    validateAnswer.textContent = "Correct!";
    question2();
   } else if(event.target.classList.contains("incorrect1")){
    validateAnswer.textContent = "Incorrect!";
    timerCount -= 5;
    question2();
   }

}

answerChoices.addEventListener("click", checkAnswer);
startButton.addEventListener("click", startGame);

init();