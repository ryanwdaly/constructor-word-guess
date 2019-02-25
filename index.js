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
            var guess = input.letterGuess.toLowerCase();

            if(isValidInput(guess)) {
                guessedLetters.push(guess);
                wordArr.forEach(function(word) {
                    word.guessLetter(guess);
                })

                //Check if input is correct
                correctGuess = false  
                for(i = 0; i < wordArr.length; i++) {
                    var letterArr = wordArr[i].letters();
                    for(j = 0; j < letterArr.length; j++) {
                        if(letterArr[j] === guess) {
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
            } else {
                promptInput();
            }
        });
    } else {
        //LOSER! SAD!
        console.log("\nNo guesses remaining. You've lost!")
    }
}


promptInput();

function isValidInput(guess) {
    var isValid = true;
    guessedLetters.forEach(function(char) {
        if(char === guess) {
            console.log("\nThat letter has already been guessed!");
            isValid = false;
        } else if (!(/[a-zA-Z]/.test(guess))) {
            console.log("\nPlease enter a Valid input.")
            isValid = false;
        }
    });

    return isValid;
}

function displayWordString() {
    result = "\n";
    for(i = 0; i < wordArr.length; i++) {
        result += wordArr[i].wordString() + ' ';
    }
    result += "\n"
    return result;
}

