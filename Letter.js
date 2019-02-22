
function Letter(letter) {
    this.letter = letter;
    this.isGuessed = false;

    this.displayedChar = function () {
        return this.isGuessed ? this.letter : "_";
    }

    this.guess = function(guessedLetter) {
        if(guessedLetter === this.letter) {
            this.isGuessed = true;
        } 
    }
}

module.exports = Letter;

