import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import SudokoTable from "./components/SudokoTable";
import { useAlert } from "react-alert";
import InitBoard from "./utils/InitTable";
import getBoard from "./utils/getBoard"
import SubmitButton from "./components/SubmitButton"
import  { currentInputValidity,allInputValidity } from "./utils/checkIfCorrect"
const url = "https://sugoku.herokuapp.com/board?difficulty=easy";

function App() {
  const [board, setBoard] = React.useState(InitBoard);
  const [iboard, setiBoard] = React.useState([]);
  const alert = useAlert();

  React.useEffect(() => {
    getBoard(url).then(data => {
      console.log("hello", typeof data.board[0][0]);
      let tmp = [];
      data.board.forEach(element => {
        tmp.push([...element]);
      });
      setiBoard(tmp);
      setBoard([...data.board]);
      alert.show("The Game Start in 3", { timeout: 1000 });
      setTimeout(() => {
        alert.show("The Game Start in 2", { timeout: 1000 });
      }, 1000);
      setTimeout(() => {
        alert.show("The Game Start in 1", { timeout: 1000 });
      }, 2000);
    });
  }, []);

  if (board === InitBoard) return <div>...loading</div>;

  return (
    <div className="App">
      <header className="App-header">
        <SudokoTable board={board} setBoard={setBoard} iboard={iboard} />
      <SubmitButton id='button1' onclick={allInputValidity} board={board}></SubmitButton>
      </header>
    </div>
  );
}

export default App;
