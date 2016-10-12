// Both letter.js and word.js should be constructor files:
// word.js should contain all of the methods which will check the letters guessed versus the random word selected.

// if not in word, +letters guessed
// if in word, +correct letters guessed
// if in word and letters guessed, no penalty

module.exports.WordEval = function(chosenWord, lettersGuessed, currentLetter) {
    this.chosenWord = chosenWord;
    this.guesses = 15;
    this.lettersInDisplay = [];
    this.currentLetter = currentLetter;
    this.wordChecker = function() {
        var wordArr = chosenWord.toLowerCase().split('');
        console.log('lettersInDisplay: ' + this.lettersInDisplay)
        console.log('currentLetter: '+this.currentLetter)
        if (this.lettersInDisplay.indexOf(this.currentLetter) === -1) {
            console.log('line 16')
            if (wordArr.indexOf(this.currentLetter) > -1) {
                this.lettersInDisplay.push(this.currentLetter);
                this.guesses--;
                console.log('in word')
            }
            else {
                lettersGuessed.push(this.currentLetter);
                this.guesses--;
                console.log('not in word')
            }
        }
        return this.lettersInDisplay;
    }
}