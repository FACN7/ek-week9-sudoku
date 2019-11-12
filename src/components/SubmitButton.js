import React from "react";
import confetti from "../utils/confetti"

const SubmitButton = (props) => {
    let {board = null ,onclick} = props;
    
    // let clickfunction = () => console.log("just clicked");
     if (!board) {
        console.log("no board recieved");
        // onclick = console.log("Enter a board please")
    }
    // else {
    //     console.table(board);
    //     clickfunction = () => console.log("We have board CHANGE THIS FUNCTION!!!");
    // }
    return (
        <div><button onClick={onclick}>Check</button></div>
    );

}
export default SubmitButton;