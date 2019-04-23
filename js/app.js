/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 // jshint esversion: 6

// crate a game object
const game = new Game();


// add a listener to the start button that fires the startGame method
const startButton = document.querySelector('#btn__reset');
startButton.addEventListener('click', (e) => {
  resetBoard();
  game.startGame();
});

// first, just set the event listener and get the text content of clicked key

// select the keyboard
const keyBoard = document.getElementsByClassName('key');

for (let key of keyBoard) {
  key.addEventListener('click', (e) => {
    let keyElement = e.target;
    game.handleInteraction(keyElement);
  });
}


// reset board function
const resetBoard = function() {
  
  // remove the existing phrase elements
  let phraseSection = document.querySelector('#phrase ul');
  while (phraseSection.firstChild) {
    phraseSection.removeChild(phraseSection.firstChild);
  }

  // KEYBOARD RESET
  for (let key of keyBoard) {
    key.disabled = false;
    key.classList.remove('wrong');
    key.classList.remove('chosen');
  }

  // LIFE RESET
  const lifeElements = document.querySelector('#scoreboard ol').children;
    for (let life of lifeElements) {
      life.style.display = 'inline-block';
    }
  game.missed = 0;
};