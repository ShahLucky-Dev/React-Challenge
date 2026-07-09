import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function increase() {
    console.log(count);
    setCount(count + 1);
    console.log(count);
  }
}
export default App;
