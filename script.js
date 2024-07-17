'use strict';

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.score').textContent = 17;
//document.querySelector('.number').textContent = secretNum;
// document.querySelector('.guess').vaue;
// document.querySelector('.guess').vaue = 23;

// Establish secret num
const findSecretNum = () => {
  return Math.trunc(Math.random() * 20) + 1;
};
const secretNum = findSecretNum();
document.querySelector('.number').textContent = secretNum;

// Establish message
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document
  .querySelector('.check')
  .addEventListener('click', function eventHandler() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
      displayMessage('No number!');
    } else if (guess > 20) {
      displayMessage('Guess must be between 1 and 20!');
    } else if (guess === secretNum) {
      displayMessage('You win!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = secretNum;
    } else if (guess !== secretNum) {
      guess < secretNum
        ? displayMessage('Too low')
        : displayMessage('Too high');
    } else if (guess > 20) {
      displayMessage('Between 1 and 20!');
    }
  });
