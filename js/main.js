
// Define global variables
var input = 0;
var calculation = 1000;
var onscreen = "";
var active = "input";

// Main function on load
$(document).ready(function(){

  // Set initial screen display to input ("0" at this point)
  setScreen("input");

  $("#one").click(function(){
    if (active=="input") {
      // onscreen = onscreen+"1";
      // input = number(onscreen);
      // setScreen("input");
      setScreen("calculation");
    }
  });


});



// Function to display the saved input or saved calculation
// Takes a string as an argument
// The argument must be either "input" or "calculation"
function setScreen(string1) {
  if (string1=="input") {
    onscreen = input.toString();
    active = "input";
  }
  else if (string1="calculation") {
    onscreen = calculation.toString();
    active = "calculation";
  }
  else {
    onscreen = "ERROR";
  }

  $("#screen-contents").text(onscreen);
}
