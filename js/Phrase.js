/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 // jshint esversion: 6

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    // select the ul in the phrase section
    const phraseSection = document.querySelector('#phrase ul');

    // loopinng through characters in the phrase, checks for space
    for (let i = 0; i < this.phrase.length; i ++) {
      let phraseChar = this.phrase.charAt([i]);

      // create the li
      const charLi = document.createElement('li');

      // create necessary list items
      if (phraseChar === " ") {
        charLi.className = "space";
        charLi.innerText = " ";
      } else {
        const charClass = `show letter ${phraseChar}`;
        charLi.className = charClass;
        charLi.innerText = phraseChar;
      }
      // append to the ul
      phraseSection.appendChild(charLi);
    }
  }


  // check the letter
  checkLetter() {

  }


}

