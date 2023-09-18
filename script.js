"use strict";
// selecting element
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0bg = document.querySelector(".player--0");
const player1bg = document.querySelector(".player--1");
let currentScore = 0;
let score = [0, 0];
let activePlayer = 0;
let isGameOn = true;
const switchPlayer = () => {
  //   switch player
  player0bg.classList.toggle("player--active");
  player1bg.classList.toggle("player--active");
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
};
// starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("dice-hidden");

// rolling dice functionalities
btnRoll.addEventListener("click", () => {
  if (!isGameOn) {
    alert("game over");
    return;
  }
  // generate random number
  const dice = Math.trunc(Math.random() * 6) + 1;
  // display dice
  diceEl.classList.remove("dice-hidden");
  diceEl.src = `dice-${dice}.png`;
  //check if roll number is 1 if true swicth to next player
  if (dice !== 1) {
    //  add current score
    currentScore += dice;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});
btnHold.addEventListener("click", () => {
  if (!isGameOn) {
    alert("game over");
    return;
  }
  // 1. add current score to active player total score
  score[activePlayer] += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    score[activePlayer];
  // 2. check if player total score is greater than 100
  if (score[activePlayer] >= 100) {
    //   .player--winner
    isGameOn = false;
    diceEl.classList.add("dice-hidden");
    console.log("greater");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
  } else {
    switchPlayer();
  }
});
btnNew.addEventListener("click", () => {
  isGameOn = true;
  activePlayer = 0;
  player0bg.classList.remove("player--winner");
  player1bg.classList.remove("player--winner");
  player0bg.classList.add("player--active");
  player1bg.classList.remove("player--active");
  currentScore = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  score = [0, 0];
  current0El.textContent = 0;
  current1El.textContent = 0;
});
