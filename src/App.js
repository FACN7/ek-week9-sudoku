import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./utils/confetti"
import YouWin from "./components/YouWin"
import SudokoTable from "./components/SudokoTable";
import SubmitButton from "./components/SubmitButton";
import InitBoard from "./utils/InitTable";
function App() {
  const [board,setBoard]=React.useState(InitBoard)
  const somethin= ()=> console.table(board);
  
  return (
    <div className="App">
      <header className="App-header">
        <SudokoTable />
      <SubmitButton onclick={somethin} board={board}/>
      <YouWin />
      </header>
    </div>
  );
}

const checkIfFinished = ()=>{};
export default App;
