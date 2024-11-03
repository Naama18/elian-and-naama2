import { useState } from "react";

function AddBoard(props) {
  const userData = JSON.parse(localStorage.getItem(props.user));

  return (
    <>
      <h1>Gamer: {props.user}</h1>

      <p>Number: {userData["num"]}</p>
      <button>+1</button>
      <button>-1</button>
      <button>/2</button>
      <button>*2</button>
    </>
  );
}

export default AddBoard;
