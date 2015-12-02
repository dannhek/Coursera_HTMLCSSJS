//Declare Variables
var target;
var guess_input_text;
var guess_input;
var finished = false;
var guesses = 0;

function do_game() {
  var quit=false
  var random_number = Math.random() * 100;
  var random_number_integer = Math.floor(random_number);
  target = random_number_integer + 1;

  while(!finished && !quit) {
    guess_input_text = prompt("I am thinking of a number " +
                              "in the range 1 to 100. \n" +
                              "What is the number?");
    if (guess_input_text == "quit") {
      quit=true
      break
    }
    guess_input = parseInt(guess_input_text);
    guesses += 1;
    finishes = check_guess();
  }
}
function check_guess() {
    console.log("target="+target+"; guess="+guess_input) ;
    if (isNaN(guess_input)) {
      alert("Please Enter a Number.") ;
      return false ;
    }
    if (guess_input > 100 || guess_input < 1) {
      alert("Enter a number between 1 and 100 (inclusive).");
      return false;
    }
    if (guess_input > target) {
      alert("Your guess is too high. Try something lower.");
      return false;
    }
    if (guess_input < target) {
      alert("Your guess is too Low. Try something higher.");
      return false;
    }
    else {
      alert("You got it!" + ".\n" +
            "The mystery number was: " + target + ".\n" +
            "It took you " + guesses + "guesses.");
      return true;
    }
}
