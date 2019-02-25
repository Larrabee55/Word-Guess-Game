// VARIABLES
var wins = 0;
var jediChoices = ["kenobi", "anikan", "luke", "quigongin", "yoda", "windu"];
// empty array to hold letter guessed
var lettersGuessed = [];
// all the letters of the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "
];
var underscores;
var randomIndex;
var jediChoice;
// used to output onto javascript
var lettersUsed = document.getElementById("letters-used");
var currentText = document.getElementById("current-text");
var winsNumber = document.getElementById("wins-number")
var guessesLeft = document.getElementById("guesses-left")

// starts game
function startGame() {
  // chooses random word from jediChoices array
  randomIndex = Math.floor(Math.random() * jediChoices.length);
  // puts random index into its own variable
  jediChoice = jediChoices[randomIndex];

  console.log(jediChoice);
  // creates an empty array for underscores whne the game starts
  underscores = [];
  // creates an empty array for the letters guessed when the game starts
  lettersGuessed = [];

  remainingGuesses = 13;
  // puts underscores for each letter in the word chosen
  for (var i = 0; i < jediChoice.length; i++) {
    underscores.push("_");
  }
  // outputs the variables on the screen
  currentText.textContent = underscores.join(" ");
  winsNumber.textContent = wins;
  guessesLeft.textContent = remainingGuesses;
  lettersUsed.textContent = lettersGuessed.join(", ");
}
// calls the function
startGame()
// enables the user to start using the keys to input the letters
document.onkeyup = function (event) {
  // makes it so all the letters are lowercase
  var userGuess = event.key.toLowerCase();

  var letterFound = false;
  // checks if the users guess it right or wrong
  if (alphabet.includes(userGuess)) {
    // 
    if (lettersGuessed.includes(userGuess) === false) {
      lettersGuessed.push(userGuess);
      // for loop to check all the 
      for (var i = 0; i < jediChoice.length; i++) {
        // if user guesses a letter right it replaces the underscore with the letter
        if (userGuess === jediChoice[i]) {
          letterFound = true;
          underscores[i] = userGuess;
        }
      }
      // if the users guess isn't a letter it - 1 off the remaining guesses
      if (letterFound === false) {
        remainingGuesses--;
      }
      guessesLeft.text = remainingGuesses;
      // if remaining guesses hits 0 then the user looses
      if (remainingGuesses <= 0) {
        // gives the user the option to play again
        if (confirm("You Lost, Play again?")) {
          startGame()
        }
        // if the user guesses all the letters in the word then the user wins 
      } else {
        if (jediChoice === underscores.join("")) {
          // gives the user the option to play again
          if (confirm("You Win, play again?")) {
            wins++;
            startGame()
          }
        }
      }
    }
  }

  currentText.textContent = underscores.join(" ");
  winsNumber.textContent = wins;
  guessesLeft.text = remainingGuesses;
  lettersUsed.textContent = lettersGuessed.join(", ");
}