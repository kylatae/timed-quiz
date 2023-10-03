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
var userScore = 0;
var userClick = "";



var body = document.body;
//Header
var headerTitle = document.createElement("header");

//Quiz Area Div
var quizZone = document.createElement("div");
var explanation = document.createElement("section");

//Box List with buttons
var optionSection = document.createElement("ol");
var but1 = document.createElement("button");
but1.id = "but1"
var but2 = document.createElement("button");
but2.id = "but2"
var but3 = document.createElement("button");
but3.id = "but3"
var but4 = document.createElement("button");
but4.id = "but4"


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
  }
]


// Starting state of webpage context
headerTitle.textContent = "Obscure Word Quiz";
explanation.textContent = `You have 90 seconds to finish as many questions as possible. 
The question will give you a definition and 4 choice answers.
Select an answer to advance to the next question. 
Wrong answers will cost you 10 seconds. Good luck!`
but1.textContent = "Start Quiz";
but2.textContent = "High Scores";
but3.textContent = "Button 3";
but4.textContent = "Button 4";

//Hide Unused Buttons until quiz begins
but3.style.display = 'none';
but4.style.display = 'none';
optionSection.style.justifyContent = 'center';


body.appendChild(headerTitle);
body.appendChild(quizZone);
quizZone.appendChild(explanation);
quizZone.appendChild(optionSection);
optionSection.appendChild(but1);
optionSection.appendChild(but2);
optionSection.appendChild(but3);
optionSection.appendChild(but4);
var button = document.querySelectorAll("button");

function startQuiz(){
  but3.style.display = 'block';
  but4.style.display = 'block';
  quizLive = true;
  questionCount = 0;
  userScore = 0;
  explanation.textContent = questionArr[questionCount].question;
  but1.textContent = questionArr[questionCount].choice1;
  but2.textContent = questionArr[questionCount].choice2;
  but3.textContent = questionArr[questionCount].choice3;
  but4.textContent = questionArr[questionCount].choice4;
}

function processAnswer(){

    if (userChoice === questionArr[questionCount].answer){
      userScore = userScore +3;
    }
    else{
      userScore = userScore -1;
    }
    console.log (userScore)
    questionCount++
    explanation.textContent = questionArr[questionCount].question;
    but1.textContent = questionArr[questionCount].choice1;
    but2.textContent = questionArr[questionCount].choice2;
    but3.textContent = questionArr[questionCount].choice3;
    but4.textContent = questionArr[questionCount].choice4;

   

}


quizZone.addEventListener("click", (event) => {
  userClick = event.target.id

  console.log ("click")
  if ((!quizLive) && (userClick === "but1"))startQuiz();
  else if (userClick === "but1" && (quizLive)){
    userChoice = "choice1";
    processAnswer();
   } 
  else if ((!quizLive) && (userClick === "but2"))console.log ("test");
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

