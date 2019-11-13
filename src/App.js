import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import SudokoTable from "./components/SudokoTable";
    import InitBoard from "./utils/InitTable";

function App() {
  const [board, setBoard] = React.useState(InitBoard);
  React.useEffect(() => {
    getBoard(url).then(data => {
      console.log("hello",typeof(data.board[0][0]));
      setBoard(data.board);
    });
  }, []);
  if (board === InitBoard) return <div>...loading</div>;

  return (
    <div className="App">
      <header className="App-header">
        <SudokoTable board={board}/>
      </header>
    </div>
  );
}

export default App;
