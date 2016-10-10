// Both letter.js and word.js should be constructor files:
// word.js should contain all of the methods which will check the letters guessed versus the random word selected.

// if not in word, +letters guessed
// if in word, +correct letters guessed
// if in word and letters guessed, no penalty

modules.exports = function WordEval(chosenWord) {
    this.chosenWord = chosenWord;
    this.lettersGuessed = [];
    this.guesses = 15;
    this.lettersInDisplay = [];
    this.wordChecker = function() {
        var wordArr = chosenWord.toLowerCase().split('');
        if (this.lettersInDisplay.indexOf(currentLetter) > -1) {
            if (wordArr.indexOf(currentLetter) > -1) {
                this.lettersInDisplay.push(currentLetter);
                this.guesses--;
            }
            else {
                this.lettersGuessed.push(currentLetter);
                this.guesses--;
            }
        }
    }
}