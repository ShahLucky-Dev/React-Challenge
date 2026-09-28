import { useState } from "react";
function App() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <h1>{name}</h1>
    </div>
  );
}

export default App;
