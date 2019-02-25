// VARIABLES
var wins = 0;
var jediChoices = ["kenobi", "anikan", "luke", "quigongin", "yoda", "windu"];

var lettersGuessed = [];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "
];
var underscores;
var randomIndex;
var jediChoice;
var lettersUsed = document.getElementById("letters-used");
var currentText = document.getElementById("current-text");
var winsNumber = document.getElementById("wins-number")
var guessesLeft = document.getElementById("guesses-left")

// 
function startGame() {

  randomIndex = Math.floor(Math.random() * jediChoices.length);

  jediChoice = jediChoices[randomIndex];

  console.log(jediChoice);

  underscores = [];
  lettersGuessed = [];

  remainingGuesses = 13;

  for (var i = 0; i < jediChoice.length; i++) {
    underscores.push("_");
  }

  currentText.textContent = underscores.join(" ");
  winsNumber.textContent = wins;
  guessesLeft.textContent = remainingGuesses;
  lettersUsed.textContent = lettersGuessed.join(", ");
}
startGame()

document.onkeyup = function (event) {

  var userGuess = event.key.toLowerCase();

  var letterFound = false;

  if (alphabet.includes(userGuess)) {
    if (lettersGuessed.includes(userGuess) === false) {
      lettersGuessed.push(userGuess);

      for (var i = 0; i < jediChoice.length; i++) {
        if (userGuess === jediChoice[i]) {
          letterFound = true;
          underscores[i] = userGuess;
        }
      }
      if (letterFound === false) {
        remainingGuesses--;
      }
      guessesLeft.text = remainingGuesses;
      if (remainingGuesses <= 0) {
        if (confirm("You Lost, Play again?")) {
          startGame()
        }
      } else {
        if (jediChoice === underscores.join("")) {
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