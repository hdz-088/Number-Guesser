// Title: Number Guessing Game (Project)
// Author: HDz(https://github.com/hdz-088)
// Date of Creation: April 26th, 2024
// Last Update: April 26th, 2024

'use strict';

// Declaration Section
let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//Function To Display Messages
const dispMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Function to Change Page Color and Number Width
const styleChange = function (color, size) {
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.number').style.width = size;
};

// Reset Conditions
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;

  dispMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  styleChange('#222', '15rem');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';
});

// Even Listener for Check Button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Checking For Right Answer
  if (guess === 0) {
    dispMessage('No Number!');
  } else if (guess === secretNum) {
    dispMessage('Correct Number!');
    styleChange('#60b347', '30rem');
    document.querySelector('.number').textContent = secretNum;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // Checking For Wrong Answer
  } else if (guess !== secretNum) {
    if (score >= 1) {
      dispMessage(guess > secretNum ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      dispMessage('You Lost the Game');
      document.querySelector('.score').textContent = 0;
    }
  }
});
