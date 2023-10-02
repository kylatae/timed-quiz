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


var body = document.body;
var headerTitle = document.createElement("header");
var quizZone = document.createElement("div");
var explanation = document.createElement("section");

var optionSection = document.createElement("ol");
// Create ordered list items
var but1 = document.createElement("button");
var but2 = document.createElement("button");
var but3 = document.createElement("button");
var but4 = document.createElement("button");

headerTitle.textContent = "Obscure Word Quiz";
explanation.textContent = "You have 90 seconds to finish as many questions as possible, Wrong answers will cost you 10 seconds. Good luck!"
but1.textContent = "Button 1";
but2.textContent = "Button 2";
but3.textContent = "Button 3";
but4.textContent = "Button 4";


body.appendChild(headerTitle);
body.appendChild(quizZone);
quizZone.appendChild(explanation);
quizZone.appendChild(optionSection);
optionSection.appendChild(but1);
optionSection.appendChild(but2);
optionSection.appendChild(but3);
optionSection.appendChild(but4);



