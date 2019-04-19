/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 // jshint esversion: 6

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  // adds the phrase to the display by creating elements
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
        const charClass = `hide letter ${phraseChar}`;
        charLi.className = charClass;
        charLi.innerText = phraseChar;
      }
      // append to the ul
      phraseSection.appendChild(charLi);
    }
  }

  // Checks if clicked letter is part of the phrase
  checkLetter(keyPressed) {
    if (this.phrase.includes(keyPressed)) {
      console.log('Yeah bitch');
      return true;
    } else {
      console.log('No Bitch');
      return false;
    }
  }

  // // check the letter
  showMatchedLetter(keyPressed) {
    const letterElements = document.querySelector('#phrase ul').children;
      for (let letter of letterElements) {
        if (keyPressed === letter.innerText) {
          letter.classList.remove('hide');
          letter.classList.add('show');
        } else {
      // remove a life from the board
     }
   }
  }


}

