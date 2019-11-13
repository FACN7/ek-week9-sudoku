

const order = [
];
const checkIfCorrect = ({ board }) => {
    if (!board) { console.log("checkIfCorrect() didn't recive a board"); return; }
    order.reduce((acc, pattern) => {
        pattern.reduce((acc, pair) => {
            let counters = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            const [a, b] = pair;

        }, true);
    }, true);

}

//takes a board array of arrays, and row and column as coordinates, 
//checks validity and returns true if input is valid, false otherwise
const currentInputValidity = (board, row, col) => {
    let counters = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < 9; i++) {
        counters[board[row][i]]++;
    }
    for (var i = 0; i < 9; i++) {
        counters[board[i][col]]++;
    }
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            counters[board[Math.floor(row/3)+i][(col%3)+j]]++;
        }
    }
    return true;
};