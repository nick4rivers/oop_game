/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 // jshint esversion: 6

// crate a game object
const game = new Game();


// add a listener to the start button that fires the startGame method
const startButton = document.querySelector('#btn__reset');
startButton.addEventListener('click', (e) => {
  game.startGame();
});


// let's start getting the keyboard functionality together

// first, just set the event listener and get the text content of clicked key
const keyBoard = document.querySelector('#qwerty');
keyBoard.addEventListener('click', (e) => {
  let keyPressed = e.target.textContent;
  console.log(keyPressed);
  
  if (game.activePhrase.checkLetter(keyPressed)) {
    game.activePhrase.showMatchedLetter(keyPressed);
  }
});
