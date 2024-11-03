import { useState } from "react";
import AddBoard from "./AddBoard";
import ListUsers from "./ListUsers";

localStorage.setItem("users", JSON.stringify([]));
let arr;

function SignIn() {
  const [inputValue, setInputValue] = useState("");
  const [displayBoard, setDisplayBoard] = useState(false);
  const [users, setUsers] = useState(localStorage.getItem("users"));
  const [currentUserName, setCurrentUserName] = useState(users[0]);

  function userExist() {
    if (!localStorage.getItem(inputValue)) {
      arr = JSON.parse(localStorage.getItem("users"));
      arr.push(inputValue);

      localStorage.setItem("users", JSON.stringify(arr));

      setUsers(JSON.parse(localStorage.getItem("users")));
      // TODO: instead of doing this here,
      // TODO: do this when "start game" is pressed
      setCurrentUserName(arr[0]);

      localStorage.setItem(
        inputValue,
        JSON.stringify({
          num: Math.floor(Math.random() * 100),
          steps: 0,
          status: "Online",
        })
      );
    } else {
      alert("userName already exist, TRY ANOTHER NAME");
    }
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("here");
          userExist();
          setDisplayBoard(true);
          setInputValue("");
        }}
      >
        <label htmlFor="userName">name:</label>
        <input
          type="text"
          name="userName"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <label>Submit</label>
        <input id="submit" type="submit" value="Submit" />
      </form>

      {displayBoard && (
        <ListUsers
          users={users}
          onTurnChange={() => {
            const currentUserIndex = users.indexOf(currentUserName);
            setCurrentUserName(users[(currentUserIndex + 1) % users.length]);
          }}
          currentUserName={currentUserName}
        />
      )}
    </>
  );
}
export default SignIn;
