inquirer = require("inquirer");
Word = require("./Word.js")

var gameComplete = false;
var guessedLetters = [];
var wordArr = []; 
var remainingGuesses = 9;

wordArr[0] = new Word("hello");
wordArr[1] = new Word("good");
wordArr[2] = new Word("sir");

while(!gameComplete) {
    promptInput();
}


function promptInput() {
    inquirer.prompt([
        // Here we create a basic text prompt.
        {
          type: "input",
          message: "Guess a Letter!",
          name: "letterGuess"
        }
    ]).then(function(input){
        guessedLetters.forEach(function(char) {
            if(char === letterGuess) {
                console.log("That letter has already been guessed.");
            } else {
                guessedLetters.push(letterGuess);
                wordArr.forEach(function(word) {
                    word.guessLetter(letterGuess);
                })
            }
        })
    });

}