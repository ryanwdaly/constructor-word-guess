
function Letter(letter) {
    this.letter = letter;
    this.isGuessed = false;

    this.displayedChar = function () {
        return this.isGuessed ? this.letter : "_";
    }

    this.guess = function(letter) {
        if(letter === this.letter) {
            this.isGuessed = true;
            console.log("Correct!")
        } else {
            console.log("Incorrect")
        }
    }
}

module.exports = Letter;

