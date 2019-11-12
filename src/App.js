import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SudokoTable from "./components/SudokoTable";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SudokoTable />
      </header>
    </div>
  );
}

export default App;
