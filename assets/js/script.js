//get HTML elements by traversing the DOM
var highScoreList = document.getElementById("high-score-list");
var resetHighScoreButton = document.getElementById("reset");
var timeLeftSpan = document.getElementById("time-left-span");
var startButton = document.getElementById("start-button");
var instructions = document.getElementById("instructions");
var questionCard = document.getElementById("question-card");
var questionText = document.getElementById("question-text");
var answerChoices = document.getElementById("answer-choices");
var validateAnswer = document.getElementById("validate-answer");
var gameOverScreen = document.getElementById("game-over");
var initials = document.getElementById("initials");
var submitButton = document.getElementById("score-submit");
var replayButton = document.getElementById("replay");
var scoreDisplay = document.getElementById("score");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");

//variables used in JS
var timerCount;
var isPlaying = false;
var timer;
var questionsAnswered = 0;
var totalNumberOfQuestions = 5;
var currentScore = 0;
var scores = [];

//function that runs right aways as the page loads
function init(){
    getHighScores();
    timerCount = 60;
    timeLeftSpan.textContent = timerCount;
}
//pulls high scores from local storage and displays them in a list if any are stored
function getHighScores(){
    var storedScores = JSON.parse(localStorage.getItem("scores"));
//if no scores are stored, the function just returns
    if(storedScores !== null){
        scores = storedScores;
    } else {
        return;
    }
//if there are more than 5 scores in storage, it removes them until there are 5
    if(scores.length > 5){
        for (let i = scores.length; i > 5; i--) {
            scores.pop();
            
        }
    }
    highScoreList.innerHTML = "";

    for (let i = 0; i < scores.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = scores[i].score + " - " + scores[i].initials;
        highScoreList.appendChild(listItem);
    }
}
//takes the user's current score, adds it to the scores array and sorts it from greatest to smallest.
function saveScore(){
    var newScore = {
        initials: initials.value,
        score: currentScore,
    }

    scores.push(newScore);
    
    scores = scores.sort((a,b) => b.score - a.score);

    if (scores.length > 5){
        scores.pop();
    }

    console.log(scores);
//stores the scores array into localstorage
    localStorage.setItem("scores", JSON.stringify(scores));
    submitButton.classList.add("hidden"); //hides the submit button, so user cannot submit more than 1 set of initials
    initials.value = ""; //clears the initials field after the user submits

}
//clears the scores array and the high score list display when you press the Reset High Scores button
function resetScores(){
    scores.splice(0);
    console.log(scores);
    localStorage.setItem("scores", JSON.stringify(scores));
    highScoreList.innerHTML = "";
}
//starts the timer and dynamically udpates the page when start button is clicked
function startGame(){
    timerCount = 60;
    isPlaying = true;
    startButton.disabled = true;
    startTimer();
    hideInstructions();
    question1();
}
//uses setInterval to update the timer number, decremeting by 1 each second
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
//when game is over, dynimically udpates the page and updates the users current score from the timer count
function gameOver(){
    console.log("gameOver confirmed");
    isPlaying = false;
    questionCard.classList.add("hidden");
    gameOverScreen.classList.remove("hidden");
    currentScore = timerCount;
    scoreDisplay.textContent = currentScore;

}


//hides instuctions and reveals questions
function hideInstructions(){
    instructions.classList.add("hidden");
    questionCard.classList.remove("hidden");

}
//functions that update the text and correct answer for each question
function question1(){
    questionText.textContent = "Which of the following is NOT a primitive data type in JavaScript?";
    answer1.textContent = "bit";
    answer1.classList.add("correct");
    answer2.textContent = "number";
    answer3.textContent = "string";
    answer4.textContent = "boolean";
}
function question2(){
    questionsAnswered++;
    answer1.classList.remove("correct");

    questionText.textContent = "In which tag do you have to link your JavaScript document?";
    answer1.textContent = "<html>";
    answer2.textContent = "<script>";
    answer2.classList.add("correct");
    answer3.textContent = "<link>";
    answer4.textContent = "<head>";  
}
function question3(){
    questionsAnswered++;
    answer2.classList.remove("correct");

    questionText.textContent = "Which of the following is the corret sign for loose equality in JavaScript?";
    answer1.textContent = "=";
    answer2.textContent = "!=";
    answer3.textContent = "===";
    answer4.textContent = "==";
    answer4.classList.add("correct"); 
}
function question4(){
    questionsAnswered++;
    answer4.classList.remove("correct");

    questionText.textContent = "Which array method adds an element to the beginning of an array?";
    answer1.textContent = ".unshift()";
    answer1.classList.add("correct");
    answer2.textContent = ".sort()";
    answer3.textContent = ".add()";
    answer4.textContent = ".push()";
}
function question5(){
    questionsAnswered++;
    answer1.classList.remove("correct");

    questionText.textContent = "In the global scope, the keyword this refers to which of the follow?";
    answer1.textContent = "The current function";
    answer2.textContent = "The html document";
    answer3.textContent = "The window object in the browser";
    answer3.classList.add("correct");
    answer4.textContent = "A variable called this";
}

//logic that checks if the button for the answer choice clicked has the "correct" class or not
//using the event.target allows it to detect the specific button within the parent element "answerChoices"
//uses the questionsAnswered counter to determine which question function to pull next
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
            questionsAnswered++;
        } else {
            validateAnswer.textContent = "Incorrect!";
            timerCount -= 5;
            console.log("Finished with wrong answer!");
            questionsAnswered++;
        }
    } 
}
//reloads the page to start the game over
function replay(){
    location.reload();
}
//event listeners for all buttons on page
startButton.addEventListener("click", startGame);
answerChoices.addEventListener("click", checkAnswer);
submitButton.addEventListener("click", function(event){
    event.preventDefault();
    saveScore();
    getHighScores();
});
resetHighScoreButton.addEventListener("click", resetScores);
replayButton.addEventListener("click", replay);

//start by calling the init function
init();