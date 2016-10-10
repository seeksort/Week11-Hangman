// Both letter.js and word.js should be constructor files:
// letter.js should control whether or not a letter appears as a "_" or as itself on-screen.

module.exports = function LetterDisplay(currentWord, lettersGuessed) {
    this.wordArr = currentWord.toLowerCase().split('');
    this.display = '';
    this.lettersInDisplay = [];
    this.createDisplay = function () {
        if (lettersGuessed.length === 0) {
            wordArr.forEach(function() {
                display += '_ ';
            })
        }
        else {
            for (var i=0;i<wordArr.length;i++) {
                for (var j=0;j<lettersGuessed.length;j++) {
                    if (wordArr[i] === lettersGuessed[j]) {
                        display += lettersGuessed[j] + ' ';
                        lettersInDisplay.push(lettersGuessed[j]);
                    }
                    else {
                        display += wordArr[i];
                    }
                }
            }
        }
        console.log(display)
        return display;
    }   
}


