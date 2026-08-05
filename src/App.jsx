import { useState } from "react";

function App() {
  const [fruits, setFruits] = useState([]);
  const [newfruit, setNewFruits] = useState("");

  function handleAdd() {
    setFruits([...fruits, newfruit]);
    setNewFruits("");
  }

  function handleChange(e) {
    setNewFruits(e.target.value);
  }

  return (
    <div>
      <input type="text" value={newfruit} onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
      {fruits.map((item) => {
        return <h1>{item}</h1>;
      })}
    </div>
  );
}

export default App;
