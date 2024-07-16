'use strict';

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 17;

// document.querySelector('.guess').vaue;
// document.querySelector('.guess').vaue = 23;

document
  .querySelector('.check')
  .addEventListener('click', function eventHandler() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
      document.querySelector('.message').textContent = 'No number!';
    }
  });
