'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number !';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.again').addEventListener('click', function () {
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    displayMessage('No number');

    //when player wins the game
  } else if (guess === secretnumber) {
    document.querySelector('.message').textContent = 'Correct number !';
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor = 'rgb(82, 202, 73)';

    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //when guess is different
  else if (guess !== secretnumber) {
    if (score > 1) {
      if (guess > secretnumber) {
        document.querySelector('.message').textContent = 'Too high !';
      } else {
        document.querySelector('.message').textContent = 'Too Low !';
      }
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game !';
      document.querySelector('.score').textContent = 0;
    }
  }
  //when guess is too high
  //   else if (guess > secretnumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high !';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game !';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  //   //when guess is too low
  //   else if (guess < secretnumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low !';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game !';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});
