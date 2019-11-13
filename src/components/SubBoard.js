import React from "react";
import "./SubBoard.css";
const numbers = [...Array(9).keys()];
const handler = (e, props, idx) => {
  // props.board[props.row][idx]=e.target.value;
  props.setBoard(board => {
      board[props.row][idx] = parseInt(e.target.value)
      console.table(board);
    return (board);
  });
  // props.setState(e=>e+1);
};

const SubBoard = props => {
  return (
    <tr key={{ row: props.row }} className="row">
      {numbers.map(idx => (
        <td key={props.row * 9 + idx} className="cell">
          <input
            row={props.row}
            col={idx}
            type="text"
            maxLength="1"
            defaultValue={
              props.board[props.row][idx] === 0
                ? ""
                : props.board[props.row][idx]
            }
            disabled={props.board[props.row][idx] !== 0}
            onChange={e => handler(e, props, idx)}
          />
        </td>
      ))}
    </tr>
  );
};

export default SubBoard;
