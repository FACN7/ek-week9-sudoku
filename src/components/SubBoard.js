import React from "react";
import "./SubBoard.css";
const numbers = [...Array(9).keys()];
const handler = (e, props, idx) => {
    if(e.target.value==="")
    return;
  let board = [...props.board];
  board[props.row][idx] = parseInt(e.target.value);
  props.setBoard(board);
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
              props.iboard[props.row][idx] === 0
                ? ""
                : props.iboard[props.row][idx]
            }
            disabled={props.iboard[props.row][idx] !== 0}
            onChange={e => handler(e, props, idx)}
          />
        </td>
      ))}
    </tr>
  );
};

export default SubBoard;
