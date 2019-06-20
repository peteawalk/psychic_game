// var wins = 0;
// var losses = 0;
var guessesRemaining = 10;
var lettersGuessed = []; //Array to store letters guesses

// // html id and class vars
var guessesRemaining_div = document.getElementById("guesses-left"); //div id="guesses-remaining"
// var lettersGuessed_div = document.getElementById("letters-guessed"); // div id="letters-guessed"
// var correctLetters_div = document.getElementById("correct-letters"); // div id="correct-letters"

// const winScore_span = document.getElementById("win-score"); //span id = "win-score"
// const loseScore_span = document.getElementById("lose-score"); //span id="lose-score"
// const scoreBoard_div = document.querySelector(".scoreboard");

// var userGuess = [];

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const lettersGuessed_div = document.getElementById("letters-guessed");

    document.addEventListener('keydown', event => {
        const key = event.key.toLowerCase();
        console.log(key); //Make sure key is being logged.

        lettersGuessed.push(key);
        lettersGuessed_div.innerHTML = ("<span>" + key + "</span>");

        if (guessesRemaining > 0) {
            // Lower guess remaining count.
            guessesRemaining_div.innerHTML = guessesRemaining--;
            // wins++;
        }
        // document.querySelector("letters-guessed").innerHTML;
    });
});