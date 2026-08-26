import { useState } from "react";

function App() {
  const [count, setcount] = useState(0);

  function increace() {
    setcount(count + 1);
  }

  function decrease() {
    setcount(count - 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>

      <button onClick={increace}>+</button>
    </div>
  );
}

export default App;
