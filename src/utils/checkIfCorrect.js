// const order = [
// ];
// const checkIfCorrect = ({ board }) => {
//     if (!board) { console.log("checkIfCorrect() didn't recive a board"); return; }
//     order.reduce((acc, pattern) => {
//         pattern.reduce((acc, pair) => {
//             let counters = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//             const [a, b] = pair;

//         }, true);
//     }, true);

// }

//takes a board array of arrays, and row and column as coordinates,
//checks validity and returns true if input is valid, false otherwise
const currentInputValidity = (board, row, col) => {
  let counters = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < 9; i++) {
    counters[board[row][i]]++;
  }
  for (let i = 1; i < 9; i++) {
    if (counters[i] > 1) {
      console.log("row",row,col);
      return false;
    }
    counters[i] = 0;
  }

  for (let i = 0; i < 9; i++) {
    counters[board[i][col]]++;
  }
  for (let i = 1; i < 9; i++) {
    if (counters[i] > 1) {
      console.log("col",row,col);
      return false;
    }
    counters[i] = 0;
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log("3X3=",Math.floor(row / 3)*3 + i,Math.floor(col / 3)*3 + j);
      counters[board[Math.floor(row / 3)*3 + i][Math.floor(col / 3)*3 + j]]++;
    }
  }
  for (let i = 1; i < 9; i++) {
    if (counters[i] > 1) {
      console.log("3X3 ",row,col);
      return false;
    }
  }
  return true;
};
export { currentInputValidity };
