import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <h1>Hello {name}</h1>
    </div>
  );
}

export default App;
