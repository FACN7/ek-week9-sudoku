import React from "react";
import "./SubBoard.css";
const numbers = [...Array(9).keys()];

const SubBoard = props => {
  // const [board,setboard]=React.useState(InitSubBoard);

  return (
    <tr key={{row:props.row}}  className="row">
      {numbers.map(idx => (
        <td key={props.row*9+idx} className="cell">
          <input row={props.row} col={idx} type="text" maxLength="1" />
        </td>
      ))}
    </tr>
  );
};

export default SubBoard;
