function getWinner(arr) {
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
  
    for (let i = 0; i < winPatterns.length; i++) {
      let [a, b, c] = winPatterns[i];
  
      let condition = arr[a] === arr[b] && arr[b] === arr[c] && arr[c] === arr[a];
  
      if (condition && arr[a]) {
         return arr[a];
      }
    }
  
    return false;
  }

  export default getWinner;