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
      'condom thing'
    ];
  }

  // just randomly selects a phrase and sets it to the active phrase for the object
  getRandomPhrase() {
    let phraseNum = Math.floor(Math.random() * this.phrases.length);
    this.activePhrase = this.phrases[phraseNum];
  }
  
}
