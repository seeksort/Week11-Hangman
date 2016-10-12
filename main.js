// main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
// The app should end when a player guesses the correct word or runs out of guesses.

// xAsk player to select category
// xRandomly grab word from selected category
// Convert word to display
// Ask for player guess
// Take player guess, loop through word, and compare guess to ind letters
// Deduct from Total Guesses if letter correct/incorrect, but not if already guessed
// Recreate display with correct letters plugged in 
// When game end (guesses <= 0 || word guessed), display full word, win/lose message and current wins/losses


var 
    inquirer = require('inquirer'),
    game = require('./game.js'),
    letter = require('./letter.js'),
    word = require('./word.js')
    ;

var gameActive = true;
var categoryChosen = false;
var letterChosen = false;
var lettersGuessed = [];
var guesses = 15;
var letterConst, wordConst, currentWord, currentLetter;

// New game
function newGame() {
    console.log(
        ' ==============================================\n',
        '~*~*~*~*~ Welcome to WebDev Hangman! ~*~*~*~*~ \n',
        '==============================================\n',
        'You will have 15 tries for each word.\n'
    );
}


// Request category
function getCategoryAndWord() {
    if (!categoryChosen) {
        inquirer.prompt([
        {
            type: 'list',
            message: 'Please choose a category:',
            choices: ['Programming Languages', 'Computer Science Concepts', 'Algorithms'],
            name: 'category'
        }
        ]).then(function(ans) {
            console.log(ans.category);
            currentWord = game.findWordBank(ans.category);
            console.log(currentWord);//debug
            categoryChosen = true;
            letterConst = new letter.LetterDisplay(currentWord, lettersGuessed);
            console.log(letterConst.createDisplay(lettersGuessed));
            wordConst = new word.WordEval(currentWord, lettersGuessed, '');
            getLetter();
        });
    }
}

// Request letter
function getLetter() {
    if (categoryChosen && guesses > 0) {
        inquirer.prompt([{
            type: 'input',
            message: 'Please enter a letter.',
            name: 'letter'
        }]).then(function(ans){
            letterChosen = true;
            wordConst.currentLetter = ans.letter.toString();
            console.log(ans.letter);
            wordConst.wordChecker();
            console.log('before' + letterConst.lettersInDisplay);
            letterConst.lettersInDisplay = wordConst.lettersInDisplay;
            console.log('line 73 ' + letterConst.lettersInDisplay)
            console.log(lettersGuessed)
            console.log(letterConst.createDisplay(lettersGuessed));
            guesses = wordConst.guesses;
            letterChosen = false;
            getLetter();
        });
    }
    else {
        console.log('Round over!')
    }
}

// Display guesses and letters guessed

// Big function that takes in Letter request, current guesses, letters guessed, blanks display, and Word eval function as parameters
function waitingForLetter() {
    while (guesses > 0) {
        if (categoryChosen) {
            getLetter();
        }
    }
}

newGame();

getCategoryAndWord();
// console.log(game.findWordBank('Programming Languages'));
// letterConst = new letter.LetterDisplay('Python', []);

// console.log(letterConst.createDisplay());























