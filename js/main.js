// Joe's Simple Calculator


// Define global variables
// Saved input value (number)
var input = 0;
// Saved calculation value (number)

var calculation = 0;
// What is displayed on screen (string)

var onscreen = "";

// Designates active value (string) (can equal "calculation" or "input")
var active = "calculation";

// Designates if operator is active (bool)
var operatorActive = false;

// Designates active operator (string) (can equal "add", "subtract", "multiply", or "divide")
var activeOperator = "";

// Designates if decimal is active (bool)
var decimalActive = false;

// # of active decimal points for input value (number)
var decimalPoints = 0;

// Text displayed on the clear button (string) (can equal "C" or "AC")
var clearText = "";


// Main function on load
$(document).ready(function(){

  // Set initial screen display to the saved calculation
  // calculation is 0 at this point
  setScreen("calculation");

  // Call the clickDigit function on click of 0-9
  // Pass the clickDigit function the number (0-9) clicked
  $("#zero").click(function(){clickDigit(0);});
  $("#one").click(function(){clickDigit(1);});
  $("#two").click(function(){clickDigit(2);});
  $("#three").click(function(){clickDigit(3);});
  $("#four").click(function(){clickDigit(4);});
  $("#five").click(function(){clickDigit(5);});
  $("#six").click(function(){clickDigit(6);});
  $("#seven").click(function(){clickDigit(7);});
  $("#eight").click(function(){clickDigit(8);});
  $("#nine").click(function(){clickDigit(9);});

  // Set active operator upon clicking any one
  $("#add").click(function(){
    operatorActive = true;
    activeOperator = "add";
    $("#add").addClass("active-operator");
    $("#subtract").removeClass("active-operator");
    $("#multiply").removeClass("active-operator");
    $("#divide").removeClass("active-operator");
  });
  $("#subtract").click(function(){
    operatorActive = true;
    activeOperator = "add";
    $("#add").removeClass("active-operator");
    $("#subtract").addClass("active-operator");
    $("#multiply").removeClass("active-operator");
    $("#divide").removeClass("active-operator");
  });
  $("#multiply").click(function(){
    operatorActive = true;
    activeOperator = "add";
    $("#add").removeClass("active-operator");
    $("#subtract").removeClass("active-operator");
    $("#multiply").addClass("active-operator");
    $("#divide").removeClass("active-operator");
  });
  $("#divide").click(function(){
    operatorActive = true;
    activeOperator = "add";
    $("#add").removeClass("active-operator");
    $("#subtract").removeClass("active-operator");
    $("#multiply").removeClass("active-operator");
    $("#divide").addClass("active-operator");
  });

  // Define clear button behavior
  // $("#clear").click(function(){

  // });



});



// Function to display the saved input or saved calculation
// Takes a string as an argument
// The argument must be either "input" or "calculation"
function setScreen(stringI) {
  if (stringI=="input") {
    onscreen = input.toString();
    active = "input";
    if (input==0) {
      clearText = "AC";
    }
    else {
      clearText = "C";
    }
  }
  else if (stringI=="calculation") {
    onscreen = calculation.toString();
    active = "calculation";
    clearText = "AC";
  }
  else {
    onscreen = "ERROR";
  }

  $("#screen-contents").text(onscreen);

  $("#clear").text(clearText);
}


// Function that will execute after a number (1-9) is pressed
// Takes the number clicked as an argument (1-9)
function clickDigit(number) {
  if (active=="input") {
      if (decimalActive) {
        input += Math.pow(10,(-1)*(decimalPoints+1));
      }
      else {
        input = (input*10)+number;
      }
    setScreen("input");
  }

  else if (active=="calculation") {
    input = number;
    setScreen("input");
  }
  else {
    setScreen("ERROR");
  }
}



