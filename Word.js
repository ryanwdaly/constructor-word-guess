Letter = require("./Letter.js");

function Word(word) {
    this.word = word;

    var lettersArr = []

    for (var i = 0; i < word.length; i++) {
        var newLetter = new Letter(word.charAt(i));
        lettersArr.push(newLetter);
    }

    this.wordString = function () {
        var wordString = [];
        
        for(var i = 0; i < lettersArr.length; i++) {
            wordString.push(lettersArr[i].displayedChar());
        }
        
        wordString = wordString.join("");
        return wordString;
    }

    this.guessLetter = function (letter) {
        lettersArr.forEach(function(letter) {
            letter.guess(letter);
        });
    }
}

module.exports = Word;
