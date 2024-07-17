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
let secretNum = findSecretNum();
let score = 20;
let highScore = 0;

// Establish message
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document
  .querySelector('.check')
  .addEventListener('click', function eventHandler() {
    const guess = Number(document.querySelector('.guess').value);
    //console.log(guess, typeof guess);

    if (!guess) {
      displayMessage('No number!');
    } else if (guess > 20) {
      displayMessage('Guess must be between 1 and 20!');
    } else if (guess === secretNum) {
      displayMessage('You win!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = secretNum;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guess !== secretNum) {
      guess < secretNum
        ? displayMessage('Too low')
        : displayMessage('Too high');
      score--;
      document.querySelector('.score').textContent = score;
    }
  });

document
  .querySelector('.btn.again')
  .addEventListener('click', function eventHandler() {
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    secretNum = findSecretNum(); // Generate a new secret number
    score = 20;
    document.querySelector('.score').textContent = score;
  });
