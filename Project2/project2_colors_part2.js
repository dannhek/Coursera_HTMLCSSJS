var target;
var guess_input;
var target_index
var finished = false;
var guesses = 0;
var color_array = ["Azure","Beige","Chartreuse","Crimson","Fuchia",
                  "Green","Indigo","Lime","Linen","Violet","Yellow"];
var color_list = get_color_list(color_array)

function do_game() {
  var quit=false
  target_index = Math.floor(Math.random() * (color_array.length-1));
  target = color_array[target_index];

  while(!finished && !quit) {
    guess_input = prompt("I am thinking of a color " +
                              "in the list of: \n" +
                              color_list +
                              "\n\nWhich Color do you think it is?");
    if (guess_input == "quit") {
      quit=true
      break
    }
    guess_input = guess_input.charAt(0).toUpperCase() + guess_input.substr(1).toLowerCase()
    guesses += 1;
    finished = check_guess();
  }
  document.body.style.backgroundColor = target
}
function check_guess() {
    console.log("target="+target+"; guess="+guess_input) ; //For Troubleshooting and testing
    var guess_index = color_array.indexOf(guess_input);

    if (guess_index == -1) {
      alert("I don't recognize " + guess_input +" as a color. \n" +
            "Please Enter a color from the list.") ;
      return false ;
    }
    if (guess_index > target_index) {
      alert("Sorry, that's not correct. My color is alphabetically lower.");
      return false;
    }
    if (guess_index < target_index) {
      alert("Sorry, that's not correct. My color is alphabetically higher.");
      return false;
    }
    else {
      alert("You got it!" + ".\n" +
            "The mystery color was: " + target + ".\n" +
            "It took you " + guesses + " guesses." +
            "\n I've now changed the background to " + target);
      return true;
    }
}
function get_color_list(ary) {
  var tmp1=ary;
  var tmp2=tmp1.pop()
  var retval = tmp1.join(", ") + ", or " + tmp2 + ".";
  return retval;
}
