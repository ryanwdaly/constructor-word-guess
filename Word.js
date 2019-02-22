Letter = require("./Letter.js");

function Word(word) {
    this.word = word;

    var lettersObjArr = []

    for (var i = 0; i < word.length; i++) {
        var newLetter = new Letter(word.charAt(i));
        lettersObjArr.push(newLetter);
    }
    this.letters = function () {
        var lettersArr = [];
        lettersObjArr.forEach(function(letterObj) {
            lettersArr.push(letterObj.letter)
        })
        return lettersArr;
    }

    this.wordString = function () {
        var wordString = [];
        
        for(var i = 0; i < lettersObjArr.length; i++) {
            wordString.push(lettersObjArr[i].displayedChar());
            wordString.push(" ");
        }
        
        wordString = wordString.join("");
        return wordString;
    }

    this.guessLetter = function (guessedLetter) {
        lettersObjArr.forEach(function(letter) {

            letter.guess(guessedLetter);
        });
    }
}

module.exports = Word;

// example = new Word("hello");
// console.log(example.letters());


