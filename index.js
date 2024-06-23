const boxes = document.querySelectorAll("#board div");
const showTurn = document.querySelector("#show-turn strong");

const playerInputs = [];
const player1 = "X";
const player2 = "O";

let turn = 0;
let currentTurn = player1;

showTurn.textContent = currentTurn;

for (let i = 0; i < boxes.length; i++) {
  let box = boxes[i];
  box.addEventListener("click", () => {
    if (turn === 9) {
      const ans = checkWinner(playerInputs);
      console.log(ans);
    }else{
    turn += 1;
    box.textContent = currentTurn;
    playerInputs[i] = currentTurn;
    currentTurn = currentTurn === player1 ? player2 : player1;
    showTurn.textContent = currentTurn;
    }

  });
}

function checkWinner(arr) {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];

  let result = "Draw";

  for (let i = 0; i < winPatterns.length; i++) {
    let [a, b, c] = winPatterns[i];
    let condition =
      arr[a] === arr[b] && arr[b] === arr[c] && arr[c] === arr[a];

    if (condition) {
      result = arr[a];
    }
  }

  return result === "Draw" ? "The match is a draw" : `Winner is ${result}`;
}

// 1. Show the inputs and whose turn in the screen.
// 2. Check for winner in every click and do auto check if all 9 clicks are over.
// 3. Do not allow click after 9 click.
// 4. Show to winner on screen.
    