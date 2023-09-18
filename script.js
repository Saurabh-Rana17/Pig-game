"use strict";
// selecting element
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const cuuent1El = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0bg = document.querySelector(".player--0");
const player1bg = document.querySelector(".player--1");
let currentScore = 0;
let score = [0, 0];
let activePlayer = 0;

// starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("dice-hidden");

// rolling dice functionalities
btnRoll.addEventListener("click", () => {
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
    //   switch player
    player0bg.classList.toggle("player--active");
    player1bg.classList.toggle("player--active");
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
