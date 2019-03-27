/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 // jshint esversion: 6


// create a new game and set the active phrase
const game = new Game();
game.getRandomPhrase();

// create a new phrase and pass it the active phrase
const phrase = new Phrase(game.activePhrase);

// add the phrase html to display the phrase
phrase.addPhraseToDisplay();

// add a listener to the start button that fires the startGame method
startButton = document.querySelector('#btn__reset');
startButton.addEventListener('click', game.startGame);

