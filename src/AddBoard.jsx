import { useState } from "react";

function AddBoard(props) {
  const userData = JSON.parse(localStorage.getItem(props.user));

  return (
    <>
      <h1>Gamer: {props.user}</h1>

      <p>Number: {userData["num"]}</p>
      <button
        onClick={() => {
          // TODO: Change the user's number.....

          props.onTurnChange();
        }}
        disabled={props.disabled}
      >
        +1
      </button>
      <button disabled={props.disabled}>-1</button>
      <button disabled={props.disabled}>/2</button>
      <button disabled={props.disabled}>*2</button>
    </>
  );
}

export default AddBoard;
