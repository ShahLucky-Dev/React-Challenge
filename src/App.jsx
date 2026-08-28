import { useState } from "react";

function App() {
  const [count, setcount] = useState(0);

  function increace() {
    setcount(count + 1);
  }

  function decrease() {
    setcount(count - 1);
  }

  function plusFive() {
    setcount(count + 5);
  }

  function reset() {
    setcount(0);
  }

  if (count === 108) {
    setcount("mala completed");
  }
  return (
    <div>
      <pre> Shree Radhe</pre>
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>

      <button onClick={increace}>+</button>

      <button onClick={plusFive}>+5</button>

      <button onClick={reset}>reset</button>
    </div>
  );
}

export default App;
