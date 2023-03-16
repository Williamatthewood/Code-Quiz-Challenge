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
    answer1.classList.add("correct");
    answer2.textContent = "This is answer 2";
    answer3.textContent = "This is answer 3";
    answer4.textContent = "This is answer 4";
    
    
}

function question2(){
    questionsAnswered++;
    
    answer1.classList.remove("correct");

    questionText.textContent = "This is Question 2. Answer it dummy!";
    answer1.textContent = "This is answer 1";
    answer2.textContent = "This is answer 2";
    answer2.classList.add("correct");
    answer3.textContent = "This is answer 3";
    answer4.textContent = "This is answer 4";
    
    
}

function question3(){
    questionsAnswered++;
    answer2.classList.remove("correct");

    questionText.textContent = "This is Question 3. Answer it dummy!";
    answer1.textContent = "This is answer 1";
    answer2.textContent = "This is answer 2";
    answer3.textContent = "This is answer 3";
    answer4.textContent = "This is answer 4";
    answer4.classList.add("correct");
    
    
}

function question4(){
    questionsAnswered++;
    answer4.classList.remove("correct");

    questionText.textContent = "This is Question 4. Answer it dummy!";
    answer1.textContent = "This is answer 1";
    answer1.classList.add("correct");
    answer2.textContent = "This is answer 2";
    answer3.textContent = "This is answer 3";
    answer4.textContent = "This is answer 4";

    
    
}
function question5(){
    questionsAnswered++;
    answer1.classList.remove("correct");

    questionText.textContent = "This is Question 5. Answer it dummy!";
    answer1.textContent = "This is answer 1";
    answer2.textContent = "This is answer 2";
    answer3.textContent = "This is answer 3";
    answer3.classList.add("correct");
    answer4.textContent = "This is answer 4";

}


function checkAnswer(event){
   var answerChoice = event.target;
   console.log(answerChoice);

    if(questionsAnswered === 0){
        if(answerChoice.classList.contains("correct")){
            validateAnswer.textContent = "Correct!";
            question2();
        } else {
            validateAnswer.textContent = "Incorrect!";
            timerCount -= 5;
            question2();
        }
    } else if(questionsAnswered === 1){
        if(answerChoice.classList.contains("correct")){
            validateAnswer.textContent = "Correct!";
            question3();
        } else {
            validateAnswer.textContent = "Incorrect!";
            timerCount -= 5;
            question3();
        }
    } else if(questionsAnswered === 2){
        if(answerChoice.classList.contains("correct")){
            validateAnswer.textContent = "Correct!";
            question4();
        } else {
            validateAnswer.textContent = "Incorrect!";
            timerCount -= 5;
            question4();
        }
    } else if(questionsAnswered === 3){
        if(answerChoice.classList.contains("correct")){
            validateAnswer.textContent = "Correct!";
            question5();
        } else {
            validateAnswer.textContent = "Incorrect!";
            timerCount -= 5;
            question5();
        }
    } else if(questionsAnswered === 4){
        if(answerChoice.classList.contains("correct")){
            validateAnswer.textContent = "Correct!";
            console.log("Finished!");
        } else {
            validateAnswer.textContent = "Incorrect!";
            timerCount -= 5;
            console.log("Finished with wrong answer!");
        }
    }

//    if(event.target.classList.contains("correct1")){
//     validateAnswer.textContent = "Correct!";
//     question2();
//    } else if(event.target.classList.contains("incorrect1")){
//     validateAnswer.textContent = "Incorrect!";
//     timerCount -= 5;
//     question2();
//    }

}

answerChoices.addEventListener("click", checkAnswer);
startButton.addEventListener("click", startGame);

init();