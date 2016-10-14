// Both letter.js and word.js should be constructor files:
// word.js should contain all of the methods which will check the letters guessed versus the random word selected.

module.exports.WordEval = function(currentWord, lettersGuessed, currentLetter) {
    this.currentWord = currentWord;
    this.guesses = 15;
    this.lettersInDisplay = [];
    this.currentLetter = currentLetter;
    this.gameActive = true;
    this.wordGuessed = false;
    this.initialDisplay = function() {
        var wordArr = this.currentWord.toLowerCase().split('');
        for (i = 0; i < wordArr.length; i++) {
            if (wordArr[i] == ' ') {
                this.lettersInDisplay.push(' ');
            } 
            else if (wordArr[i] == '-') {
                this.lettersInDisplay.push('-');
            }
            else {
                this.lettersInDisplay.push(' _ ');
            }
        }
    }
    this.wordChecker = function() {
        var wordArr = this.currentWord.toLowerCase().split('');
        if (this.lettersInDisplay.indexOf(this.currentLetter) === -1){
            if (wordArr.indexOf(this.currentLetter) > -1) {
                for (k = 0; k < wordArr.length; k++) {
                    if (this.currentLetter === wordArr[k]) {
                        this.lettersInDisplay.splice(k, 1, this.currentLetter);
                    } 
                }
                this.guesses--;
                //console.log('in word')//debug
            }
            else if (lettersGuessed.indexOf(this.currentLetter) === -1) {
                lettersGuessed.push(this.currentLetter);
                this.guesses--;
                //console.log('not in word')//debug
            }
            else {
                console.log('You\'ve guessed that letter already.')
            }
        }
        else {
            console.log('You\'ve guessed that letter already.')
        }
        return this.lettersInDisplay;
    };
    this.isGameActive = function() {
        var displayString = this.lettersInDisplay.join('');
        if (displayString === this.currentWord) {
            this.gameActive = false;
            this.wordGuessed = true;
        }
        return this.gameActive
    }
}