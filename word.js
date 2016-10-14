// Both letter.js and word.js should be constructor files:
// word.js should contain all of the methods which will check the letters guessed versus the random word selected.

module.exports.WordEval = function(currentWord, lettersGuessed, currentLetter) {
    this.guesses = 15;
    this.lettersInDisplay = [];
    this.currentLetter = currentLetter;
    this.gameActive = true;
    this.wordGuessed = false;
    this.initialDisplay = function() {
        var wordArr = currentWord.toLowerCase().split('');
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
    };
    this.wordChecker = function() {
        var wordArr = currentWord.toLowerCase().split('');
        if (this.lettersInDisplay.indexOf(this.currentLetter) === -1){
            // Letter not in display, check if in word
            if (wordArr.indexOf(this.currentLetter) > -1) {
                for (k = 0; k < wordArr.length; k++) {
                    if (this.currentLetter === wordArr[k]) {
                        this.lettersInDisplay.splice(k, 1, this.currentLetter);
                    } 
                }
                this.guesses--;
            }
            // Letter not in word, check if not already guessed
            else if (lettersGuessed.indexOf(this.currentLetter) === -1) {
                lettersGuessed.push(this.currentLetter);
                this.guesses--;
            }
            else {
                // Letter was already guessed
                console.log('You\'ve guessed that letter already.');
            }
        }
        else {
            // Letter was previously correctly guessed and is in current display
            console.log('You\'ve guessed that letter already.');
        }
        return this.lettersInDisplay;
    };
    this.isGameActive = function() {
        var displayString = this.lettersInDisplay.join('');
        if (displayString === currentWord) {
            this.gameActive = false;
            this.wordGuessed = true;
        }
        return this.gameActive;
    };
};