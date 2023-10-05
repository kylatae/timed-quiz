/*  
Body
  Header (Quiz Title)  --- Center 5rem
  Quiz Zone -- Colored box with paragraph and answer table inside
    Explanation (Will also be question later) --- 3rem, Left justify
    Button/Option Section --- 3 rem, left justify. Each option box will be a gradiented color
      Button for Start (Will also be option 1 later)
      Button for High scores (Will also be option 2 later)
      Button for Option 3
      Button for Option 4
  Timer (Appears only during quiz) --- Center, 3rem, Will change color as it counts down (Starting green ending red)
  Footer
*/
//boolean of if quiz is active
var quizLive = false;
var userChoice = "";
var questionCount = 0;
var userClick = "";
var timeRemove = 0;
var msgClear = 0;
var initials = "";
var highScoreList = [];



var body = document.body;
//Header
var headerTitle = document.createElement("header");

//Quiz Area Div
var quizZone = document.createElement("div");
var explanation = document.createElement("section");

//Box List with buttons
var optionSection = document.createElement("ol");
var but1 = document.createElement("button");
but1.id = "but1";
var but2 = document.createElement("button");
but2.id = "but2";
var but3 = document.createElement("button");
but3.id = "but3";
var but4 = document.createElement("button");
but4.id = "but4";
var resultDisp = document.createElement("section");
var timerDisp = document.createElement("section");



//question array for displaying the question and 4 choices and having an answer to compare correct choice to the value of the button pressed
var questionArr = [
  { "qKey": 1,
    "question": "To throw someone out the window",
    "answer": "choice2",
    "choice1": "Winderation",
    "choice2": "Defenstrate",
    "choice3": "Extrate",
    "choice4": "Winenstrate"
  },
  { "qKey": 2,
    "question": "To bicker loudly about nothing",
    "answer": "choice3",
    "choice1": "Rabble",
    "choice2": "Complain",
    "choice3": "Brabble",
    "choice4": "Borborygm"
  },
  { "qKey": 3,
  "question": "Pretending to work when you're really goofing off",
  "answer": "choice1",
  "choice1": "Fudgel",
  "choice2": "Scrumping",
  "choice3": "Farkle",
  "choice4": "Gusy"
  },
  { "qKey": 4,
  "question": "More than usually susceptible to the cold",
  "answer": "choice3",
  "choice1": "Frosty",
  "choice2": "Shiver",
  "choice3": "Nesh",
  "choice4": "Benthos"
  },
  { "qKey": 5,
  "question": "The big toe",
  "answer": "choice4",
  "choice1": "Firtoe",
  "choice2": "Thumper",
  "choice3": "Binky",
  "choice4": "Hallux"
  },
  { "qKey": 6,
  "question": "The division symbol",
  "answer": "choice2",
  "choice1": "Modulus",
  "choice2": "Obelus",
  "choice3": "Slash",
  "choice4": "Linet"
  },
  { "qKey": 7,
  "question": "Someone who lies or exaggerates",
  "answer": "choice1",
  "choice1": "Taradiddle",
  "choice2": "Dramattle",
  "choice3": "Riddlerer",
  "choice4": "Lawyist"
  },
  { "qKey": 8,
  "question": "To skip a stone across the surface of the water",
  "answer": "choice4",
  "choice1": "Gliden",
  "choice2": "Jilt",
  "choice3": "Troden",
  "choice4": "Jillick"
  }
]


// Starting state of webpage context
function doReset(){
headerTitle.textContent = "Obscure Word Quiz";
explanation.textContent = `You have 90 seconds to finish as many questions as possible. 
The question will give you a definition and 4 choice answers.
Select an answer to advance to the next question. 
Wrong answers will cost you 10 seconds. Good luck!`
but1.textContent = "Start Quiz";
but2.textContent = "High Scores";
but3.textContent = "Button 3";
but4.textContent = "Button 4";
resultDisp.textContent = "";
timerDisp.textContent = "";
//Hide Unused Buttons until quiz begins
but3.style.display = 'none';
but4.style.display = 'none';
optionSection.style.justifyContent = 'center';
quizLive = false;
}

//creating the page
body.appendChild(headerTitle);
body.appendChild(quizZone);
quizZone.appendChild(explanation);
quizZone.appendChild(optionSection);
optionSection.appendChild(but1);
optionSection.appendChild(but2);
optionSection.appendChild(but3);
optionSection.appendChild(but4);
body.appendChild(resultDisp);
body.appendChild(timerDisp);

var button = document.querySelectorAll("button");
//Setting up the first set of questions and making the 3rd and 4th button appear again while starting the timer
function startQuiz(){
  updateTimer();
  but3.style.display = 'block';
  but4.style.display = 'block';


  quizLive = true;
  questionCount = 0;

  explanation.textContent = questionArr[questionCount].question;
  but1.textContent = questionArr[questionCount].choice1;
  but2.textContent = questionArr[questionCount].choice2;
  but3.textContent = questionArr[questionCount].choice3;
  but4.textContent = questionArr[questionCount].choice4;

}
//Evaluating the answer and if time needs to be taken away or if the game is over
function processAnswer(){
  if (userChoice === questionArr[questionCount].answer){
    resultDisp.textContent = "Correct";
  }
  else{
    timeRemove = timeRemove + 10;
    resultDisp.textContent = "WRONG..."
  }
  msgClear = 10; //Message will clear after 1.0 second while disabling buttons for .1 second to prevent spamming
  but1.disabled = true;
  but2.disabled = true;
  but3.disabled = true;
  but4.disabled = true;
  
    questionCount++
    if (questionCount > 7){
      return;
    }
    explanation.textContent = questionArr[questionCount].question;
    but1.textContent = questionArr[questionCount].choice1;
    but2.textContent = questionArr[questionCount].choice2;
    but3.textContent = questionArr[questionCount].choice3;
    but4.textContent = questionArr[questionCount].choice4;

}
//when a high score is added it pulls old high scores from local storage, cuts name to 3 charas, 
//and then adds new high score to the list before resaving it to local storage
function addHighScore(str,int){
  var oldHighScoreList = JSON.parse(localStorage.getItem("highScoreList"));
  var newScore = [{int: int, str: str.substr(0,3)}]

  if (oldHighScoreList !== null){
  highScoreList = oldHighScoreList;
    highScoreList = [...highScoreList, ...newScore];
  }
  else{
    highScoreList = newScore
  }
  console.log (highScoreList)
  localStorage.setItem("highScoreList", JSON.stringify(highScoreList));  
}
//Tries to pull highscore from local storage, presents in a message and gives option to clear
function displayHighScore(){
  var highScoreList = JSON.parse(localStorage.getItem("highScoreList"));
  if (highScoreList !== null){
    var dispHighScore = `Name | Score 
  `;
    for (i = 0; i < highScoreList.length; i++)
    {
      dispHighScore = dispHighScore + `${highScoreList[i].str}  | ${highScoreList[i].int}  
  `;
    }
    dispHighScore = dispHighScore + `Would you like to clear the scores?`;
    var clearHigh = confirm(dispHighScore);
    if (clearHigh) localStorage.setItem("highScoreList", null);
  
  }
  else{
    alert("No saved high scores, play the game to get one!");
  }
}
//Timer
function updateTimer() {
  var timeLeft = 590;
  var timeInterval = setInterval(function () {
    // removes time on wrong answer


    //Clears  answer message after 1 second
    if (msgClear > 0){
      msgClear--;
    }
    else{
     resultDisp.textContent = "";
    }
    // end game and calc high score when finished, timeleft to not let players go negative, time remove to make sure clock updates before score is given.
    if (questionCount > 7 && timeLeft > 0 && timeRemove < 1){
      clearInterval(timeInterval);
      initials = prompt("Your score is " + Math.floor(timeLeft/10) + "! What are you initials?(3 Char Max)");
      console.log (initials);
      //If user hits cancel turns initials into MPT for Empty
      if (initials === null) initials = "MPT";
      doReset();
      addHighScore(initials, Math.floor(timeLeft/10));
      timeLeft = 0
    }
    if (timeRemove > 0){
      timeLeft = timeLeft - timeRemove*10;
      timeRemove = 0;
      if (timeLeft < 0) timeLeft = 0;
    }
    //This is to prevent button spamming before timer updates are calculated
    but1.disabled = false;
    but2.disabled = false;
    but3.disabled = false;
    but4.disabled = false;

       if (timeLeft > 1) {
      timerDisp.textContent = timeLeft/10;
      timeLeft--;
    } else if (timeLeft === 1) {
      timerDisp.textContent = Math.floor(timeLeft/10);
      timeLeft--;
    } else {
      timerDisp.textContent = '';
      clearInterval(timeInterval);
      //Only runs a reset if a reset is needed
      if (quizLive){
      alert("You lost, Try again to get your name on the high score board!");
      //I could put in a addHighScore(initials, timeleft); here as well and let the user initial a score of 0 but I chose not to. 
      doReset();
      }

    }
  }, 100);
}
// Check for clicking in button area and respond based on button pressed
quizZone.addEventListener("click", (event) => {
  userClick = event.target.id

  console.log ("click")
  if ((!quizLive) && (userClick === "but1"))startQuiz();
  else if (userClick === "but1" && (quizLive)){
    userChoice = "choice1";
    processAnswer();
   } 
  else if ((!quizLive) && (userClick === "but2"))displayHighScore();
  else if (userClick === "but2" && (quizLive)){
    userChoice = "choice2";
    processAnswer();
   } 
  else if (userClick === "but3"){
    userChoice = "choice3";
    processAnswer();
   } 
  else if (userClick === "but4"){
   userChoice = "choice4";
   processAnswer();
  } 

  
});
//Set the page
doReset();