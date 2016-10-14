// main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
// The app should end when a player guesses the correct word or runs out of guesses.

var 
    inquirer = require('inquirer'),
    game = require('./game.js'),
    letter = require('./letter.js'),
    word = require('./word.js')
    ;

var gameActive = true;
var categoryChosen = false;
var lettersGuessed = [];
var guesses = 15;
var wins = 0;
var losses = 0;
var letterConst, wordConst, currentWord;

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
    if (!categoryChosen && gameActive) {
        inquirer.prompt([
        {
            type: 'list',
            message: 'Please choose a category (ascending difficulty):',
            choices: ['Programming Languages', 'Computer Science Concepts', 'Algorithms'],
            name: 'category'
        }
        ]).then(function(ans) {
            currentWord = game.findWordBank(ans.category);
            categoryChosen = true;
            wordConst = new word.WordEval(currentWord, lettersGuessed, '');
            wordConst.initialDisplay();
            letterConst = new letter.LetterDisplay(currentWord, lettersGuessed, wordConst.lettersInDisplay);
            console.log(letterConst.createDisplay(lettersGuessed) + '\n');
            getLetter();
        });
    }
}

// Request letter
function getLetter() {
    if (categoryChosen && guesses > 0 && gameActive) {
        inquirer.prompt([{
            type: 'input',
            message: 'Please enter a letter.',
            name: 'letter'
        }]).then(function(ans){
            wordConst.currentLetter = ans.letter.toString();
            wordConst.wordChecker();
            gameActive = wordConst.isGameActive();
            letterConst.lettersInDisplay = wordConst.lettersInDisplay;
            console.log(letterConst.createDisplay(lettersGuessed));
            console.log('Letters guessed: ' + lettersGuessed);
            guesses = wordConst.guesses;
            console.log('Guesses left: ' + guesses + '\n');
            getLetter();
        });
    }
    else {
        console.log('\n~*~*~*~*~ END OF ROUND ~*~*~*~*~\n');
        if (wordConst.wordGuessed === true) {
            wins++;
            console.log('You win!');
        }
        else {
            losses++;
            console.log('You ran out of guesses!');
            console.log('The word was "' + currentWord + '"');
        }
        console.log('\n~*~*~*~*~ Your Stats ~*~*~*~*~');
        console.log('Wins: ' + wins);
        console.log('Losses: ' + losses + '\n');
        gameReset();
    }
}

// Play again
function gameReset() {
    inquirer.prompt([{
            type: 'list',
            message: 'Play again?',
            choices: ['Yes', 'No'],
            name: 'resp'
    }]).then(function(ans) {
        if (ans.resp === 'Yes') {
            categoryChosen = false;
            gameActive = true;
            guesses = 15;
            lettersGuessed = [];
            getCategoryAndWord();
        }
        else {
            console.log('\n~*~*~*~*~*~*~*~*~*~*~*~*~*~*~');
            console.log('~*~*~*~*~ Farewell! ~*~*~*~*~');
            console.log('~*~*~*~*~*~*~*~*~*~*~*~*~*~*~\n\n');
        }
    });
}

// Start game
newGame();
getCategoryAndWord();