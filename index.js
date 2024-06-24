import checkWinner from "./utils/checkWinner.js";

const boxes = document.querySelectorAll("#board div");
const showTurn = document.querySelector("#show-turn strong");
const displayWinner = document.querySelector("#display-winner");

const playerInputs = new Array(9);
const player1 = "X";
const player2 = "O";

let turn = 0;
let currentTurn = player1;
let isWinnerDeclared = false;

showTurn.textContent = currentTurn;

for (let i = 0; i < boxes.length; i++) {
  let box = boxes[i];
  box.addEventListener("click", () => {
    if (!isWinnerDeclared && turn < 9) {
      turn += 1;
      box.textContent = currentTurn;
      playerInputs[i] = currentTurn;
      currentTurn = currentTurn === player1 ? player2 : player1;
      showTurn.textContent = currentTurn;

      const ans = checkWinner(playerInputs);
      if (ans) {
        displayWinner.textContent = `winner is ${ans}`;
        isWinnerDeclared = true;
      }
    }
  });
}
