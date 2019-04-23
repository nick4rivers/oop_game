/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// jshint esversion: 6

 class Game {
  constructor() {
    this.missed = 0;
    this.activePhrase = null;
    this.phrases = [
      'Discipline Creates Lifestyle',
      'Everything is Learnable',
      'Procrastination Steals Time',
      'Clarity Precedes Success',
      'You Are Enough',
      'Happiness Requires Struggle'
    ];
  }

  // just gets a random number to select a phrase later
  getRandomPhrase() {
    return Math.floor(Math.random() * this.phrases.length);
  }

  // hides start screen overlay
  startGame() {
    
    // creates a new phrase object and add it using the phrase method
    this.activePhrase = new Phrase(this.phrases[this.getRandomPhrase()]);
    
    // add the phrase to the display
    this.activePhrase.addPhraseToDisplay();
    
    // select and hide start screen overlay
    document.querySelector('#overlay').style.visibility = 'hidden';
  }

  // checks for a win
  checkForWin() {
    let hideCount = 0;
    const letterElements = document.querySelector('#phrase ul').children;
    // check for hidden elements
    for (let letter of letterElements) {
        if (letter.classList[0] === 'hide') {
          hideCount += 1;
        }
     }

     // declare a win
     if (hideCount === 0) {
      return true;
     } else {
      return false;
     }
  }

  removeLife() {
    this.missed += 1;
    const lifeElements = document.querySelector('#scoreboard ol').children;
    for (let i = 0; i < this.missed; i += 1) {
      lifeElements[i].style.display = 'none';
    }
  }

  gameOver() {
    // select and hide start screen overlay
    if (this.missed === 5) {
      document.querySelector('#overlay').classList.add('lose');
      document.querySelector('#overlay').style.visibility = 'visible';
    } else if (this.checkForWin()) {
      document.querySelector('#overlay').classList.add('win');
      document.querySelector('#overlay').style.visibility = 'visible';
    }

  }

  // handle interaction method
  handleInteraction(keyElement) {
    // Check if the selected letter is a match
    if (this.activePhrase.checkLetter(keyElement.textContent)) {
      keyElement.classList.add('chosen');
      keyElement.disabled = true;
      this.activePhrase.showMatchedLetter(keyElement.textContent);
      this.gameOver();
    } else {
      keyElement.classList.add('wrong');
      keyElement.disabled = true;
      this.removeLife();
      this.gameOver();
    }
  }



}
