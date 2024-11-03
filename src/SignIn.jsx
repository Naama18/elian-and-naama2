import { useState } from "react";
import AddBoard from "./AddBoard";
import ListUsers from "./ListUsers";
localStorage.setItem("users", JSON.stringify([]));
let arr;
function SignIn() {
  const [current, setCurrent] = useState();
  const [displayBoard, setDisplayBoard] = useState(false);
  const [users, setUsers] = useState(localStorage.getItem("users"));

  function userExist() {
    if (!localStorage.getItem(current)) {
      arr = JSON.parse(localStorage.getItem("users"));
      arr.push(current);
      localStorage.setItem("users", JSON.stringify(arr));
      setUsers(JSON.parse(localStorage.getItem("users")));
      localStorage.setItem(
        current,
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
      <label htmlFor="userName">name:</label>
      <input
        type="text"
        name="userName"
        value={current}
        onChange={(e) => setCurrent(e.target.value)}
      ></input>
      <label>Submit</label>
      <input
        id="submit"
        type="submit"
        value="Submit"
        onClick={() => {
          console.log("here");
          userExist();
          setDisplayBoard(true);
        }}
      />
      {setDisplayBoard && (
        <ListUsers
        // name={current}
        // userNameData={JSON.parse(localStorage.getItem(current))}
        />
      )}
    </>
  );
}
export default SignIn;
