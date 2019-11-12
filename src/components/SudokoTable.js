import React from "react";
import InitBoard from "../utils/InitTable";
import SubBoard from "./SubBoard";
import "./SudokoTable.css";
const numbers = [...Array(9).keys()];
const SudokoTable = props => {
  const [board,setBoard]=React.useState(InitBoard);

  return (
    <div className="tableContainer">
      <table id="grid" border="1">
        <tbody>
          {numbers.map(idx => (
            <SubBoard key={idx} row={idx} board={board} setBoard={setBoard} ></SubBoard>
          ))}
         
        </tbody>
      </table>
    </div>
  );
};

export default SudokoTable;
