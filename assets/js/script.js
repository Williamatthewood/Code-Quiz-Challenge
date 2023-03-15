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
    showQuestions();
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
    instructions.setAttribute("style", "display: none");
}

function showQuestions(){

}

startButton.addEventListener("click", startGame);

init();