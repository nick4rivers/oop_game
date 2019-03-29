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

  // just randomly selects a phrase and sets it to the active phrase for the object
  getRandomPhrase() {
    let phraseNum = Math.floor(Math.random() * this.phrases.length);
    this.activePhrase = this.phrases[phraseNum];
  }

  // hides start screen overlay
  startGame() {

    // fire the get random phrase method to set active phrase property
    this.getRandomPhrase();

    // creates a new phrase object and add it using the phrase method
    const phrase = new Phrase(this.activePhrase);
    phrase.addPhraseToDisplay();
    
    // select and hide start screen overlay
    document.querySelector('#overlay').style.visibility = 'hidden';
  }

  // handle interaction method
  handleInteraction() {
    
  }
  
}
