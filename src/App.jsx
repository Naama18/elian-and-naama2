import { useState } from "react";

import "./App.css";
import SignIn from "./SignIn";

function App() {
  const [displaySign, setDisplaySign] = useState(false);

  return (
    <>
      <button onClick={() => setDisplaySign(true)}>Add gamer</button>
      {displaySign && <SignIn />}
    </>
  );
}

export default App;
