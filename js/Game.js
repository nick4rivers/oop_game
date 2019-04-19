/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// jshint esversion: 6

 class Game {
  constructor() {
    this.missed = 0;
    this.activePhrase = null;
    this.phrases = [
      'jap anus relations',
      'anal bum cover',
      'la tits now',
      'condom thing',
      'swords'
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

  // handle interaction method
  handleInteraction() {
    
  }
  
}
