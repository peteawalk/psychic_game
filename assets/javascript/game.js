document.addEventListener("DOMContentLoaded", () => {
    "use strict"; // Load DOM Content before running...

    // Set global vars and arrays
    var wins = 0;
    var losses = 0;
    var guessesRemaining = 10;
    var lettersGuessed = []; //Array to store user guesses -- letters only!
    var incorrectChars; // To store incorrect characters
    var randomLetter;
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // // HTML id and class vars
    var guessesRemaining_div = document.getElementById("guesses-left"); //div id="guesses-remaining"
    var lettersGuessed_div = document.getElementById("letters-guessed"); // div id="letters-guessed"
    var correctLetters_div = document.getElementById("correct-letters"); // div id="correct-letters"
    var incorrectCharacters_div = document.getElementById("incorrect-characters"); // div id="incorrect-characters"
    var winScore_span = document.getElementById("win-score"); //span id = "win-score"
    var loseScore_span = document.getElementById("lose-score"); //span id="lose-score"

    // Action begins
    var reset = function () {
        lettersGuessed = [];
        guessesRemaining = 10;
    };

    var pyschicChoice = function () {
        randomLetter = alphabet[Math.floor(Math.random() * alphabet.length + 1)];
    };

    document.onkeyup = function (event) {
        var userGuess = event.key.toLowerCase();
        // Update divs here
        guessesRemaining_div.innerHTML = guessesRemaining;
        lettersGuessed_div.innerHTML = lettersGuessed.join(" ");

        if (alphabet.includes(userGuess)) {
            guessesRemaining--;
            lettersGuessed.push(userGuess);
            pyschicChoice();
        } else {
            incorrectCharacters_div.innerHTML = ("This is not a letter: " + userGuess); // Filter out non alpha characters
        }

        if (guessesRemaining >= 0) {
            if (userGuess === randomLetter) {
                wins++;
                correctLetters_div.innerHTML = ("You guessed correct! I picked: " + randomLetter);
                winScore_span.innerHTML = wins;
                reset();
            } else if (guessesRemaining == 0) {
                losses++;
                loseScore_span.innerHTML = losses;
                reset();
            } else
                console.log("Keep guessing!");
        }
    }

});