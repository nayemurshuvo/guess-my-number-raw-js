'use strict';

let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 15;
let highScore = 0;

document.querySelector('.guessBtn').addEventListener('click', function () {
  const guessValue = Number(document.querySelector('.guess').value);
  // Validation
  if (!guessValue || guessValue > 30) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Enter a Number Between 1-30!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤣You Lost The Game';
      document.querySelector('.score').textContent = 0;
    }
  }
  // win
  else if (guessValue === secretNumber) {
    document.querySelector('.message').textContent = '👌Correct Guess!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#003A98';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // High
  else if (guessValue > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😂Guess is High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤣You Lost The Game';
      document.querySelector('.score').textContent = 0;
    }
    document.querySelector('.guess').value = '';
  }

  // Low
  else if (guessValue < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😂Guess is Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤣You Lost The Game';
      document.querySelector('.score').textContent = 0;
    }
    document.querySelector('.guess').value = '';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 15;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 30) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '🤯';
  document.querySelector('body').style.backgroundColor = '#223';
});
