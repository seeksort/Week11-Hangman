// Your game.js file will randomly select a word for the player.

// word banks
var wbLanguages = [
    'JavaScript', 'Python', 'Ruby', 'FORTRAN', 'Go', 'Lisp', 'Java', 'PHP', 'COBOL', 'Assembly', 'Basic', 'Rust', 'Perl', 'Haskell'
];

var wbConcepts = [
    'abstraction', 'big-o notation', 'recursion', 'data structure'
];

var wbAlgorithms = [
    'Bubble Sort', 'Monte Carlo', 'breadth-first search', 'depth-first search', 'Towers of Hanoi'
];

var randomWord = function(wordBank) {
    return wordBank[Math.floor(Math.random() * wordBank.length)];
};

module.exports.findWordBank = function(category) {
    var chosenWord;
    switch (category) {
        case 'Programming Languages':
            chosenWord = randomWord(wbLanguages);
            break;
        case 'Computer Science Concepts':
            chosenWord = randomWord(wbConcepts);
            break;
        case 'Algorithms':
            chosenWord = randomWord(wbAlgorithms);
            break;
        default:
            console.log('Error occurred');
            break;
    }
    return chosenWord.toLowerCase();
};