"use strict";

let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 15;
let highScore = 0;

// here, 5 times this function used in the total code
const displayMessage = function (msg) {
  document.querySelector(".message").textContent = msg;
};

document.querySelector(".guessBtn").addEventListener("click", function () {
  const guessValue = Number(document.querySelector(".guess").value);
  // Validation
  if (!guessValue || guessValue > 30) {
    if (score > 1) {
      displayMessage("Enter a Number Between 1-30!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🤣You Lost The Game";
      document.querySelector(".score").textContent = 0;
    }
  }
  // win
  else if (guessValue === secretNumber) {
    displayMessage("👌Correct Guess!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#003A98";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  // Wrong Guess(replace two condition by this one)
  else if (guessValue !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guessValue > secretNumber ? "😂Guess is High" : "😂Guess is Low"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("🤣You Lost The Game");
      document.querySelector(".score").textContent = 0;
    }
    document.querySelector(".guess").value = "";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 15;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 30) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "🤯";
  document.querySelector("body").style.backgroundColor = "#223";
});
