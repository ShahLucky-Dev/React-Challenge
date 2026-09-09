import { useState } from "react";

function App() {
  const [count, seCount] = useState(0);

  function increase() {
    seCount(count + 1);
  }

  function decreace() {
    seCount(count - 2);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decreace}>-</button>
    </div>
  );
}

export default App;
