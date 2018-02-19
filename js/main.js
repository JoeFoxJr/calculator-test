// Joe's Simple Calculator


// Define global variables
// Saved input value (number)
var input = 0;

// Saved calculation value (number)
var calculation = 0;

// What is displayed on screen (string)
var onscreen = "";

// Designates active value (string) (can equal "calculation" or "input")
// Active value is the value last printed to the screen
var active = "calculation";

// Designates if operator is active (bool)
var operatorActive = false;

// Designates active operator (string)
// (can equal "add", "subtract", "multiply", or "divide")
var activeOperator = "";

// True if decimal is active for input value (bool)
var decimalActive = false;

// # of active decimal points for input value (number)
var decimalPoints = 0;

// # of active digit points for input value (number)
// this is the number of digits to the left of the decimal
var digitPoints = 0;

// Text displayed on the clear button (string) (can equal "C" or "AC")
var clearText = "AC";


// Main function on load
$(document).ready(function(){

  // Set initial screen display to the saved calculation
  // calculation is 0 at this point
  setScreen("calculation");

  // Call the clickDigit function on click of 0-9
  // Pass the clickDigit function the number (0-9) clicked
  $("#zero").click(function(){
    clickDigit(0);
    updateOnscreenVariables();
  });
  $("#one").click(function(){
    clickDigit(1);
    updateOnscreenVariables();
  });
  $("#two").click(function(){
    clickDigit(2);
    updateOnscreenVariables();
  });
  $("#three").click(function(){
    clickDigit(3);
    updateOnscreenVariables();
  });
  $("#four").click(function(){
    clickDigit(4);
    updateOnscreenVariables();
  });
  $("#five").click(function(){
    clickDigit(5);
    updateOnscreenVariables();
  });
  $("#six").click(function(){
    clickDigit(6);
    updateOnscreenVariables();
  });
  $("#seven").click(function(){
    clickDigit(7);
    updateOnscreenVariables();
  });
  $("#eight").click(function(){
    clickDigit(8);
    updateOnscreenVariables();
  });
  $("#nine").click(function(){
    clickDigit(9);
    updateOnscreenVariables();
  });

  // Define decimal point button behavior
  $("#decimal").click(function(){
    if (decimalActive == false) {
      decimalActive = true;
      decimalPoints = 0;
    }
    updateOnscreenVariables();
  });

  // Define negative button behavior
  $("#negative").click(function(){
    if (active=="input") {
      input = (-1)*input;
      setScreen("input");
    }

    else if (active=="calculation") {
      input = (-1)*calculation;
      operatorActive = false;
      activeOperator = "";
      setScreen("input");
    }

    else {
      setScreen("ERROR");
    }
    updateOnscreenVariables();

  });

  // Set active operator (exclusive) upon clicking any operator
  $("#add").click(function(){
    if (operatorActive) {
      equate();
    };

    if (active == "input") {
      calculation = input;
    }

    else if (active == "calculation") {
      input = calculation;
    }

    operatorActive = true;
    activeOperator = "add";
    decimalActive = false;
    active = "calculation";
    decimalPoints = 0;
    digitPoints = 0;
    $("#add").addClass("active-operator");
    $("#subtract").removeClass("active-operator");
    $("#multiply").removeClass("active-operator");
    $("#divide").removeClass("active-operator");
    updateOnscreenVariables();
  });
  $("#subtract").click(function(){
    if (operatorActive) {
      equate();
    };

    if (active == "input") {
      calculation = input;
    }

    else if (active == "calculation") {
      input = calculation;
    }

    operatorActive = true;
    activeOperator = "subtract";
    decimalActive = false;
    active = "calculation";
    decimalPoints = 0;
    digitPoints = 0;
    $("#add").removeClass("active-operator");
    $("#subtract").addClass("active-operator");
    $("#multiply").removeClass("active-operator");
    $("#divide").removeClass("active-operator");
    updateOnscreenVariables();
  });
  $("#multiply").click(function(){
    if (operatorActive) {
      equate();
    };

    if (active == "input") {
      calculation = input;
    }

    else if (active == "calculation") {
      input = calculation;
    }

    operatorActive = true;
    activeOperator = "multiply";
    decimalActive = false;
    active = "calculation";
    decimalPoints = 0;
    digitPoints = 0;
    $("#add").removeClass("active-operator");
    $("#subtract").removeClass("active-operator");
    $("#multiply").addClass("active-operator");
    $("#divide").removeClass("active-operator");
    updateOnscreenVariables();
  });
  $("#divide").click(function(){
    if (operatorActive) {
      equate();
    };

    if (active == "input") {
      calculation = input;
    }

    else if (active == "calculation") {
      input = calculation;
    }

    operatorActive = true;
    activeOperator = "divide";
    decimalActive = false;
    active = "calculation";
    decimalPoints = 0;
    digitPoints = 0;
    $("#add").removeClass("active-operator");
    $("#subtract").removeClass("active-operator");
    $("#multiply").removeClass("active-operator");
    $("#divide").addClass("active-operator");
    updateOnscreenVariables();
  });

  // Define clear button behavior
  $("#clear").click(function(){
    if (input ==0) {
      operatorActive = false;
      activeOperator = "";
      calculation = 0;
      $("#add").removeClass("active-operator");
      $("#subtract").removeClass("active-operator");
      $("#multiply").removeClass("active-operator");
      $("#divide").removeClass("active-operator");
    }

    if (active == "calculation") {
      calculation = 0;
    }

    decimalActive = false;
    decimalPoints = 0;
    digitPoints = 0;
    input = 0;

    clearText = "AC";

    setScreen("input");
    updateOnscreenVariables();
  });

  // Define equals button behavior
  $("#equals").click(function(){
    equate();
    updateOnscreenVariables();
  });

});



// Function to display the saved input or saved calculation
// Takes a string as an argument
// The argument must be either "input" or "calculation"
function setScreen(stringI) {
  if (stringI=="input") {

    onscreen = input.toFixed(decimalPoints);
    //var onscreen1 = onscreen.toLocaleString("en"); //this is an idea for later
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
    //clearText = "AC";
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

    if ((decimalPoints + digitPoints) > 9) {
      return;
    }

    if (decimalActive) {
      decimalPoints ++;

      if (input >= 0) {
        input += number*Math.pow(10,(-1)*(decimalPoints));
      }

      else {
        input -= number*Math.pow(10,(-1)*(decimalPoints));
      }
    }

    else {

      if (input == 0 && number ==0) {
        return
      }

      else {
        digitPoints ++;

        if (input >= 0) {
          input = (input*10)+number;
        }

        else {
          input = (input*10)-number;
        }

      }

    }

    setScreen("input");

  }

  else if (active=="calculation") {
    input = number;
    digitPoints=1;

    setScreen("input");
  }

  else {
    setScreen("ERROR");
  }

}


// Function that determines the answer based on current state of the system
// Performs the active operation on the calculation using the input
// Is called whenever the "#equals" button or any of the operator buttons are pressed
function equate() {

  switch (activeOperator) {
    case "add":
      calculation += input;
      break;
    case "subtract":
      calculation -= input;
      break;
    case "multiply":
      calculation = calculation*input;
      break;
    case "divide":
      calculation = calculation/input;
      break;
    default:
      calculation = input;
  }

  //$("#add").removeClass("active-operator");
  //$("#subtract").removeClass("active-operator");
  //$("#multiply").removeClass("active-operator");
  //$("#divide").removeClass("active-operator");

  setScreen("calculation");

}



// Function that is used to display javascript variables on page during debugging
// This function should be called at the end of every other function while debugging
function updateOnscreenVariables() {
  $('.input').html(input);
  $('.calculation').html(calculation);
  $('.onscreen').html(onscreen);
  $('.active').html(active);
  $('.operatorActive').html(operatorActive);
  $('.activeOperator').html(activeOperator);
  $('.decimalActive').html(decimalActive);
  $('.decimalPoints').html(decimalPoints);
  $('.digitPoints').html(digitPoints);
  $('.clearText').html(clearText);
}



