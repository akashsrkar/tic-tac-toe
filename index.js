import getWinner from "./utils/getWinner.js";
import { showElement, hideElement } from "./utils/elementDisplay.js";

const boxes = document.querySelectorAll("#board div");
const showTurn = document.querySelector("#show-turn");
const displayWinner = document.querySelector("#display-winner");
const playAgain = document.querySelector("#play-again");

const PLAYER_INPUTS = new Array(9).fill(null);
const FIRST_PLAYER = "X";
const SECOND_PLAYER = "O";

let turn = 0;
let currentTurn = FIRST_PLAYER;
let gameStatus = checkGameStatus();

showTurn.textContent = `Current Turn: ${currentTurn}`;
playAgain.classList.add("hide");

for (let i = 0; i < boxes.length; i++) {
  let box = boxes[i];
  box.addEventListener("click", () => {
    if (gameStatus && !box.textContent) {
      continueGame(box, i);
    }
  });
}

function checkGameStatus() {
  const winner = getWinner(PLAYER_INPUTS);
  const maxTurn = 9;
  return !winner && turn < maxTurn;
}

function continueGame(box, index) {
  turn += 1;
  box.textContent = currentTurn;
  PLAYER_INPUTS[index] = currentTurn;
  currentTurn = currentTurn === FIRST_PLAYER ? SECOND_PLAYER : FIRST_PLAYER;
  showTurn.textContent = `Current Turn: ${currentTurn}`;
  gameStatus = checkGameStatus();
  if (!gameStatus) {
    endGame();
  }
}

function endGame() {
  const winner = getWinner(PLAYER_INPUTS);
  showTurn.textContent = "Game Over";
  playAgain.removeAttribute("class");
  playAgain.classList.add("show");
  if (!winner) {
    displayWinner.textContent = "The match is a draw";
    return;
  }
  displayWinner.textContent = `winner is ${winner}`;
}


playAgain.addEventListener("click", () => {
  PLAYER_INPUTS.fill(null);
  turn = 0;
  currentTurn = FIRST_PLAYER;
  gameStatus = checkGameStatus();
  showTurn.textContent = `Current Turn: ${currentTurn}`;
  playAgain.removeAttribute("class");
  playAgain.classList.add("hide");
  boxes.forEach(box => {
    box.textContent = "";
  });
  displayWinner.textContent = "";
})

// 1. Give a button to restart the game instead of refreshing the page.

// 2. Smartly add style using css
