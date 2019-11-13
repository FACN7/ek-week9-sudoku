import React from "react";
import "./SubBoard.css";
import { useAlert } from "react-alert";
import { currentInputValidity } from "../utils/checkIfCorrect";
const numbers = [...Array(9).keys()];

const handler = (e, props, idx, alert) => {
  let val = e.target.value;
  if (e.target.value !== "") {
    val = parseInt(e.target.value);
  } else {
    val = 0;
  }
  let board = [...props.board];
  board[props.row][idx] = val;
  props.setBoard(board);
  if (val !== 0) {
    if (!currentInputValidity(board, props.row, idx)) {
      alert.show("change it", { timeout: 1000 });
    } else {
      alert.show("nice", { timeout: 1000 });
    }
  }
};

const SubBoard = props => {
  const alert = useAlert();

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
            onChange={e => handler(e, props, idx, alert)}
          />
        </td>
      ))}
    </tr>
  );
};

export default SubBoard;
