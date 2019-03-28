/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 // jshint esversion: 6


// add a listener to the start button that fires the startGame method
startButton = document.querySelector('#btn__reset');
startButton.addEventListener('click', (e) => {
  e.preventDefault();
  const game = new Game();
  game.startGame();
});

