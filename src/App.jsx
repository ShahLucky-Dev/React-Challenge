import { useState } from "react";

function App() {
  const [pass, setPass] = useState("");
  const [show, setShow] = useState(false);

  function password(event) {
    setPass(event.target.value);
  }

  function changeType() {
    setShow(!show);
  }

  return (
    <div>
      Enter Password:
      <input
        type={show ? "text" : "password"}
        value={pass}
        onChange={password}
      />
      <button onClick={changeType}>
        {show ? "hide password" : "show password"}
      </button>
    </div>
  );
}

export default App;
