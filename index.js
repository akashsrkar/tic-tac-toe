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
      }else if(turn === 9){
        displayWinner.textContent = "The match is drawn"
      }
    }
  });
}


// 1. Bring in the logic of win and draw together in a function and also change the display and remove the current turn and replace it with "Game over".

// 2. Give a button to restart the game instead of refreshing the page.

// 3. Smartly add style using css
