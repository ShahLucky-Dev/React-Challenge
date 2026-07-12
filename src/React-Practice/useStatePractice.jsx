import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function increase1() {
    setCount(count + 1);
  }

  function increase5() {
    setCount(count + 5);
  }

  function reset() {
    setCount(0);
  }
  return (
    <div>
      <h1>{count}</h1>
      <br />
      <button onClick={increase1}>+1</button>
      <br />
      <button onClick={increase5}>+5</button>
      <br />
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
