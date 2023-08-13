

//update 9jun22

// recap issues having:
// value vs val() when trying to set text on an INPUT text box
// value is vanilla JS, as in textContent.value = "";
// val() is jquery as in var.val("");

// value vs textContent vs innerHTML vs innertext:
// value is only for textbox, not sure of val().
// other three are divided as follows:
// textContent, replaces the String
// innerHTML, copies the actual HTML and Tags
// innertext is like a copy without formatting button




//New entry: 1MAY22


//variables for score keeping
let correctTracker = 0, wrongTracker = 0, streakTracker = 0,
streakMax = 0, percentTracker = 0;

//variables to calculate multiplication
let factor1, factor2 = 3;

//hold user's answer
let userAnswer;

//Holds string to display to user are answer inputted
let resultsString = "";

let csrf = "";

//variables for parts of DOM
let textArea = document.getElementById("mainInput"),
labelArea = document.getElementById("mathProblem"),
correct = document.getElementById("correctCount"),
wrong = document.getElementById("wrongCount"),
streak = document.getElementById("streakCount"),
streakM = document.getElementById("streakMax"),
percentCorrect = document.getElementById("percent"),
modal = document.getElementById("myModal"),
log = document.getElementById("log"),
results = document.getElementById("results");
printResults = document.getElementById("modal_comments");

 
 //assign random to variables
 function assignRandomInt(){
     const temp1 = factor1;
     const temp2 = factor2;
    factor1 = Math.floor(Math.random() * (11) + 2); //range 2 to 12
    factor2 = Math.floor(Math.random() * (11) + 2); //range 2 to 12

    while (temp1 == factor1){
        factor1 = Math.floor(Math.random() * (11) + 2); //range 2 to 12
    }
    while (temp2 == factor2){
        factor2 = Math.floor(Math.random() * (11) + 2); //range 2 to 12
    }
 }
 
 function onFocus(e){
    // e.target.style.border = "2px solid pink";

 }
 function onBlur(e){
     e.target.style.border = "2px solid grey"
 }
  function init(){
     set_handlers("1");
     set_handlers('2');
     set_handlers("3");
     set_handlers("4");
     set_handlers('5');
     set_handlers("6");
     set_handlers("7");
     set_handlers('8');
     set_handlers("9");
     set_handlers("clearLt");
     set_handlers("clearRt");
     set_handlers("0");
     set_handlers("enter");
     textArea.addEventListener('focus', onFocus);
    //  textArea.addEventListener('blur', onBlur);
  }
 
 
 
  //FUNCTION FOR MULTI_TOUCH
  function set_handlers(name){
    var el = document.getElementById(name);
    el.addEventListener('touchstart', handleStart);
    el.addEventListener('touchend', handleEnd);
    el.addEventListener('click', clicked);
    log.prepend("Initialized\n");
 }
 
 

//start focus on textfield and add numbers to label
function setUpPageWithRandom(){
    assignRandomInt();
    //give math problem
    // labelArea.style.display = "block";
    labelArea.textContent = factor1 + " * " + factor2 
    + " = ";
    results.textContent = "";
    textArea.value = "";
    textArea.focus();

    let responseSetUp = 0; //this is to get a response when no problems attempted.

    $.ajax({
      url: '',
      type: 'post',
      data: {
            correctOrNot: responseSetUp,
            csrfmiddlewaretoken: csrf
      },
      success: function(responseSetUp){
        
          
         if(responseSetUp.attempts == 0) //There were no attempts made in this time period
            $("#num_problems").text("Troubleshooting.");

         else{ //The database has info on previous attempts
            $("#num_problems").text("Number of problems attempted in one hour: " + responseSetUp.attempts),
            $("#num_right").text("You got " + responseSetUp.correct + " problems right."),
            $("#num_wrong").text("And " + responseSetUp.wrong + " wrong.")
         }
      },
   })
}

//set up page without calling new problem
function setUpPageNoRandom(){
    //give math problem
    // labelArea.style.display = "block";
    labelArea.textContent = factor1 + " * " + factor2 
    + " = ";
    results.textContent = "";
    textArea.value = "";
    textArea.focus();
}
//Set up page, giving functionality to calculator keys


function keepScore(){

   //print score
   correct.innerHTML = "Total correct: " + correctTracker + " / ";
   wrong.innerHTML = 'Total wrong: ' + wrongTracker + " / ";
   streak.innerHTML = 'Streak: ' + streakTracker + " / ";
   streakM.innerHTML = 'Max streak: ' + streakMax;

   //print percentage
   if (correctTracker + wrongTracker == 0){
      percentCorrect.innerHTML = "Percent correct: 0% / ";
   }
   else{
      percentCorrect.innerHTML = "Percent correct: " +
      ((correctTracker / (correctTracker + wrongTracker)) * 100).toFixed(2) + "% / ";
   }

}


      
function clicked(ev){
      
   const input_value = $("#mainInput");
   let value = ev.target.value;
   
   if (value == "enter"){
      //call the function for handling enter button
      enter_button(input_value.val());
      $("#log").append("Enter button clicked.\n");

   }

   else if (value == "clear"){
      //clear the text field
      input_value.val("");
      $("#log").append("Clear button clicked.\n");

   }

   //the rest are number buttons
   else {
      //add the number to the text field
      input_value.val(input_value.val() + value);
      $("#log").append("Number " + value + " button clicked.\n");
   }
}



//function for when user touches button
function handleStart(evt) {
evt.preventDefault();
$("#log").append("Handle function: " + evt.target.value + "\n");

//set up colors for active buttons
//red
if (evt.target.value == 'clear'){
   evt.target.style = 'background: #ff3c41; color: #fff';
}
//green
else if (evt.target.value == 'enter'){
  evt.target.style = 'background: #47cf73; color: #fff'
}
//pink
else{
evt.target.style = 'background: #e850c5; color: #fff;';
}
}



//function for when user lets go button
function handleEnd(evt) {

evt.preventDefault();
const input_value = $("#mainInput");

let value = $(this).val();
if (value == "clear"){
   $("#log").append("Clear command.\n");
   input_value.val("");
}
else if(value == 'enter'){
   $("#log").append("Enter command.\n");
   enter_button(input_value.val());
}
else{
   $("#log").append("Number entered.\n");
   input_value.val(input_value.val() + value);
}

evt.target.style = 'background: none; color: transparent';
$("#log").append("Touch released by: " + value + "\n");
}




//function for enter key action
function enter_button(input){
   let response;

   //if answer is correct set background to green and print statement
   //if wrong, background is red and print statement
   userAnswer = input;   //get user input
   setUpPageNoRandom();  //reset the page, but DO NOT get a new math problem

   response = checkCalculation();    //get the string to print
   if (response == 1){   //correct
      results.style.backgroundColor = 'rgba(0, 255, 0, 0.2)';
   } else {  //wrong
      results.style.backgroundColor = 'rgba(220, 20, 60, 0.2)';
   }
   results.textContent = resultsString;  //print the string to the results box
   //clean up the textbox
   textArea.value = "";
   //get new math problem
   assignRandomInt();
      //print new problem 
   labelArea.textContent = factor1 + " * " + factor2 + " = ";



   //THIS IS THE PORTION WHERE YOU ENTER FUNCTIONALITY FOR RECORDING STATS...
   $.ajax({
      url: '',
      type: 'post',
      data: {
            correctOrNot: response,
            csrfmiddlewaretoken: csrf
      },
      success: function(response){
            
            $("#num_problems").text("Number of problems attempted in one hour: " + response.attempts),
            $("#num_right").text("You got " + response.correct + " problems right."),
            $("#num_wrong").text("And " + response.wrong + " wrong.")
      },
   })
}





// function to do multiplication
// returns string whether user got answer correct or not
function checkCalculation(){
   const product = factor1 * factor2;
   //case answer is zero and answerfield is blank
   if (userAnswer == product && userAnswer == ""){
      wrongTracker++;
      streakTracker = 0;
         resultsString = "No, " + factor1 + " * " + factor2 + " is not '_'";
      return -1; //wrong answer
   }

   //user gets the right answer
   else if(userAnswer == product){
      correctTracker++;
      streakTracker++;
      if (streakTracker > streakMax){
         streakMax = streakTracker;
      }
      resultsString = "Good. " + factor1 + " * " + factor2 + " = " + product;
      return 1; //correct answer
   }

   //user gets answer wrong
   else{
      wrongTracker++;
      streakTracker = 0;
      resultsString = "No, " + factor1 + " * " + factor2 + " is not " + userAnswer;
      return -1; //wrong answer
   }

}
      
      


//jquery for using pinpad
$(document).on("keydown", "form", function(event) { 
   if (event.key == "Enter"){
      //call the function for handling enter button
      enter_button(textArea.value);
      return false;
   }

   //case user enters a numeral or backspace or delete
   else { 
         if(event.key >= "0" && event.key <= "9"){
            //add input to pin window
            textArea.value = textArea.value + event.key;
         }
         //clear pin window
         else if (event.key == 'Backspace' || event.key == 'Delete'){
            textArea.value = "";
         }
      }
      return true;
});



// ************************************************************
// ********** Code for overlay screen *************************
// ************************************************************

/* Open */
function openNav() {
document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
document.getElementById("myNav").style.height = "0%";
}

function closeStats(){
document.getElementById("stats-window").style.visibility = "hidden";
$("#num_right").css('visibility', 'hidden');
$("#num_wrong").css('visibility', 'hidden');
}

function openStats(){
document.getElementById("stats-window").style.visibility = "visible";
if ($("#num_right").text() != "True"){
   $("#num_right").css('visibility', 'visible');
}
if ($("#num_wrong").text() != "True"){
   $("#num_wrong").css('visibility', 'visible');
}
}
//******************************************************************** */
//******************************************************************** */




$(document).ready(
    function () {
       init();
       setUpPageWithRandom();
       csrf = $("input[name=csrfmiddlewaretoken]").val();
      
    }
 )
 
 
