import checkWinner from "./utils/checkWinner.js";

const boxes = document.querySelectorAll("#board div");
const showTurn = document.querySelector("#show-turn");
const displayWinner = document.querySelector("#display-winner");

const playerInputs = new Array(9);
const player1 = "X";
const player2 = "O";

let turn = 0;
let currentTurn = player1;
let gameStatus = checkGameStatus();

showTurn.textContent = `Current Turn: ${currentTurn}`;

for (let i = 0; i < boxes.length; i++) {
  let box = boxes[i];
  box.addEventListener("click", () => {
    if (gameStatus) {
      continueGame(box, i);
    }
  });
}

function checkGameStatus() {
  const winner = checkWinner(playerInputs);
  const maxTurn = 9;
  return !winner && turn < maxTurn;
}

function continueGame(box, index) {
  turn += 1;
  box.textContent = currentTurn;
  playerInputs[index] = currentTurn;
  currentTurn = currentTurn === player1 ? player2 : player1;
  showTurn.textContent = `Current Turn: ${currentTurn}`;
  gameStatus = checkGameStatus();
  if (!gameStatus) {
    endGame();
  }
}

function endGame() {
  const winner = checkWinner(playerInputs);
  showTurn.textContent = "Game Over";
  if (!winner) {
    displayWinner.textContent = "The match is a draw";
    return;
  }
  displayWinner.textContent = `winner is ${winner}`;
}

//1. Fix Game over
// 2. Give a button to restart the game instead of refreshing the page.

// 3. Smartly add style using css
