import { useState } from "react";

function AddBoard(props) {
  const [user, setUsers] = useState(
    JSON.parse(localStorage.getItem(props.user))
  );
  console.log(user);
  // const userData = JSON.parse(localStorage.getItem(user));
  // console.log(userData);
  const [userNumber, setUserNumber] = useState(user["num"]);
  const [userSteps, setUserSteps] = useState(0);
  const [gamesAmount, setGamesAmount] = useState(0);

  function updateScoreLocalStorage() {
    const updatedLocalStorage = JSON.parse(localStorage.getItem(props.user));
    console.log(gamesAmount);
    updatedLocalStorage["steps"][gamesAmount] = userSteps;
    localStorage.setItem(props.user, JSON.stringify(updatedLocalStorage));
  }

  function calculate(mathOperator, number) {
    switch (mathOperator) {
      case "+":
        setUserSteps(userSteps + 1);

        updateScoreLocalStorage();
        setUserNumber(userNumber + number);
        break;
      case "-":
        setUserSteps(userSteps + 1);

        updateScoreLocalStorage();
        setUserNumber(userNumber - number);

        break;
      case "/":
        setUserSteps(userSteps + 1);

        updateScoreLocalStorage();
        setUserNumber(Math.floor(userNumber / number));
        break;
      case "*":
        updateScoreLocalStorage();
        setUserSteps(userSteps + 1);
        setUserNumber(Math.floor(userNumber * number));

        break;
    }
  }
  function removeUserFromWindow(userToDelete) {
    const index = props.users.indexOf(userToDelete);
    props.setUsers((prev) => {
      prev.splice(index, 1);
      return [...prev];
    });
    console.log("here");
  }
  return (
    <>
      <h1>Gamer: {props.user}</h1>
      <p>Steps: {userSteps}</p>
      <p>Number: {userNumber}</p>
      {userNumber !== 100 ? (
        <>
          <button
            onClick={() => {
              calculate("+", 1);
              props.onTurnChange();
            }}
            disabled={props.disabled}
          >
            +1
          </button>
          <button
            onClick={() => {
              calculate("-", 1);
              props.onTurnChange();
            }}
            disabled={props.disabled}
          >
            -1
          </button>
          <button
            onClick={() => {
              calculate("/", 2);
              props.onTurnChange();
            }}
            disabled={props.disabled}
          >
            /2
          </button>
          <button
            onClick={() => {
              calculate("*", 2);
              props.onTurnChange();
            }}
            disabled={props.disabled}
          >
            *2
          </button>
        </>
      ) : (
        <>
          <p>
            {console.log(JSON.parse(localStorage.getItem(props.user))["steps"])}
            {props.user} Scores:{" "}
            {JSON.parse(localStorage.getItem(props.user))["steps"]}
          </p>
          <button
            onClick={() => {
              AddBoard,
                setUserNumber(Math.floor(Math.random() * 100)),
                setUserSteps(0),
                setGamesAmount(gamesAmount + 1);
            }}
          >
            Start Over
          </button>
          <button
            onClick={() => {
              removeUserFromWindow(props.user);
            }}
          >
            Quit
          </button>
        </>
      )}
    </>
  );
}

export default AddBoard;
