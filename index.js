inquirer = require("inquirer");
Word = require("./Word.js")

var guessedLetters = [];
var wordArr = []; 
var remainingGuesses = 9;

wordArr[0] = new Word("hello");
wordArr[1] = new Word("good");
wordArr[2] = new Word("sir");
  
var promptInput = function() {
    if (remainingGuesses > 0) {
        console.log(displayWordString());
        inquirer.prompt([
        // Here we create a basic text prompt.
        {
            type: "input",
            message: "Guess a Letter!",
            name: "letterGuess"
        }
        ]).then(function(input){

            //Checks if Letter has already been guessed
            var isGuessedAlready = false;
            guessedLetters.forEach(function(char) {
                if(char === input.letterGuess) {
                    console.log("\nThat letter has already been guessed!");
                    isGuessedAlready = true;
                    promptInput();
                }
            });
            

            //If letter has not been guessed 
            if(!isGuessedAlready) {
                guessedLetters.push(input.letterGuess);
                wordArr.forEach(function(word) {
                    word.guessLetter(input.letterGuess);
                })

                //Check if input is correct
                correctGuess = false  
                for(i = 0; i < wordArr.length; i++) {
                    var letterArr = wordArr[i].letters();
                    for(j = 0; j < letterArr.length; j++) {
                        if(letterArr[j] === input.letterGuess) {
                            correctGuess = true;
                        }
                    }
                }

                //If Input is Correct, do this, else, do that
                if(correctGuess) {
                    console.log("\nCorrect!");
                } else {
                    console.log("\nIncorrect!");
                    remainingGuesses -= 1;
                }

                //is won?
                var isWon = true;
                var displayArr = displayWordString();
                displayArr = displayArr.split("");
                for(var i = 0; i < displayArr.length; i++) {
                    if(displayArr[i] === "_") {
                        //RECURSION MOFO!
                        isWon = false;
                        promptInput();
                        break;
                    }
                }
                if(isWon) {
                    console.log("\nYou've Won!");
                }
            }
        });
    } else {
        //LOSER! SAD!
        console.log("\nNo guesses remaining. You've lost!")
    }
}


promptInput();

function displayWordString() {
    result = "\n";
    for(i = 0; i < wordArr.length; i++) {
        result += wordArr[i].wordString() + ' ';
    }
    result += "\n"
    return result;
}

