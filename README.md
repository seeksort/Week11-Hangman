# Week11-Hangman

(Node.js) A command line web development-themed hangman app that uses JavaScript constructors.

The game has a web development theme with three categories of increasing difficulty: 

- Programming Languages
- Computer Science Concepts
- Algorithms

This is similar to my [vanilla JS Hangman game](https://github.com/seeksort/week-3-game), except the graphics are lower-res, heh.

To launch the game, type: 

    node main.js

Constructors are tricky. "this" is everywhere. I used for-loops because using forEach() was actually more inconvenient; nesting a variable stored in the constructor causes the "this." syntax to get confused, and the only fix I found was to store the constructor variable in a new variable before the forEach() and reassign afterwards. So using for-loops was the cleaner solution.