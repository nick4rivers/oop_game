/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 // jshint esversion: 6


// start a new game and set the active phrase
const game = new Game();
game.getRandomPhrase();

// create a new phrase using the active phrase
const phrase = new Phrase(game.activePhrase);

// add the phrase html
phrase.addPhraseToDisplay();