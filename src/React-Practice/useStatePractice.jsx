import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function increase1() {
    setCount(count + 1);
  }

  function increase5() {
    setCount(0);
  }

  function reset() {
    setCount(count - count);
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
