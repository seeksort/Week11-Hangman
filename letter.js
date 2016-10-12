// Both letter.js and word.js should be constructor files:
// letter.js should control whether or not a letter appears as a "_" or as itself on-screen.

module.exports.LetterDisplay = function(currentWord, lettersGuessed) {
    this.wordArr = '';
    this.display = '';
    this.lettersInDisplay = [];
    this.createDisplay = function(lettersGuessed) {
        this.wordArr = currentWord.toLowerCase().split('');
        this.display = '';
        console.log(this.wordArr)
        console.log(this.lettersInDisplay);
        if ((lettersGuessed.length === 0) && (this.lettersInDisplay.length === 0)) {
            for (var h=0;h<this.wordArr.length;h++) {
                this.display += '_ ';
            } 
        }
        else {
            for (var i=0;i<this.wordArr.length;i++) {
                var letterUsed = false;
                for (var j=0;j<this.lettersInDisplay.length;j++) {
                    if ((this.wordArr[i] === this.lettersInDisplay[j]) && (letterUsed === false)) {
                       this.display += this.lettersInDisplay[j] + ' ';
                       letterUsed = true;
                    }
                }
                if (letterUsed === false) {
                    this.display += '_ ';
                }
            }
        }
        console.log(this.display)
        return this.display;
    }   
}


