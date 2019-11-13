const allInputValidity = (board, alert) => {
  for (let i = 0; i < 9; i++) {
    if (!currentInputValidity(board, i, i, true)) {
      alert.show("Wrong!!", { timeout: 1000 });
      return false;
    }
  }
  alert.show("Correct!!", { timeout: 1000 });
  return true;
};

//takes a board array of arrays, and row and column as coordinates,
//checks validity and returns true if input is valid, false otherwise
const currentInputValidity = (board, row, col, all) => {
  let counters = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < 9; i++) {
    counters[board[row][i]]++;
  }
  for (let i = 1; i < 9; i++) {
    if (counters[i] > 1) {
      return false;
    }
    if (all && counters[i] !== 1) {
      return false;
    }
    counters[i] = 0;
  }

  for (let i = 0; i < 9; i++) {
    counters[board[i][col]]++;
  }
  for (let i = 1; i < 9; i++) {
    if (counters[i] > 1) {
      return false;
    }
    if (all && counters[i] !== 1) {
      return false;
    }
    counters[i] = 0;
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      counters[
        board[Math.floor(row / 3) * 3 + i][Math.floor(col / 3) * 3 + j]
      ]++;
    }
  }
  for (let i = 1; i < 9; i++) {
    if (counters[i] > 1) {
      return false;
    }
    if (all && counters[i] !== 1) {
      return false;
    }
  }
  return true;
};
export { currentInputValidity, allInputValidity };
