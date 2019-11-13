import React from "react";
import { useAlert } from "react-alert";

const SubmitButton = ({onclick,board,id }) => {
  const alert = useAlert();

  // let clickfunction = () => console.log("just clicked");
  if (!board) {
    console.log("no board recieved");
    // onclick = console.log("Enter a board please")
  }

  return (
    <div>
      <button id={id} onClick={()=>{onclick(board, alert)}}>Check</button>
    </div>
  );
};
export default SubmitButton;
