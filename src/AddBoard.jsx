import { useState } from "react";

function AddBoard(props) {
  const userData = JSON.parse(localStorage.getItem(props.user));
  const [userNumber, setUserNumber] = useState(userData["num"]);
  const [userSteps, setUserSteps] = useState(0);
  const [currentUserName, setCurrentUserName] = useState(props.user);

  function calculate(mathOperator, number) {
    if (
      userNumber + number === 100 ||
      userNumber - number === 100 ||
      userNumber * number === 100 ||
      userNumber / number === 100
    ) {
    }
    switch (mathOperator) {
      case "+":
        setUserSteps(userSteps + 1);

        setUserNumber(userNumber + number);
        break;
      case "-":
        setUserSteps(userSteps + 1);
        setUserNumber(userNumber - number);

        break;
      case "/":
        setUserSteps(userSteps + 1);

        setUserNumber(Math.floor(userNumber / number));

        break;
      case "*":
        setUserSteps(userSteps + 1);

        setUserNumber(Math.floor(userNumber * number));

        break;
    }
  }

  return (
    <>
      <h1>Gamer: {props.user}</h1>
      <p>Steps: {userSteps}</p>
      <p>Number: {userNumber}</p>
      <button
        onClick={() => {
          // TODO: Change the user's number.....

          {
            calculate("+", 1);
          }
          props.onTurnChange();
        }}
        disabled={props.disabled}
      >
        +1
      </button>
      <button
        onClick={() => {
          // TODO: Change the user's number.....

          {
            calculate("-", 1);
          }
          props.onTurnChange();
        }}
        disabled={props.disabled}
      >
        -1
      </button>
      <button
        onClick={() => {
          // TODO: Change the user's number.....

          {
            calculate("/", 2);
          }
          props.onTurnChange();
        }}
        disabled={props.disabled}
      >
        /2
      </button>
      <button
        onClick={() => {
          // TODO: Change the user's number.....

          {
            calculate("*", 2);
          }
          props.onTurnChange();
        }}
        disabled={props.disabled}
      >
        *2
      </button>
    </>
  );
}

export default AddBoard;
