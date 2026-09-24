import { useState } from "react";

function App() {
  const [name, setName] = useState("Lucky");
  const [age, setAge] = useState(20);

  function handleChange() {
    setName("Ratan");
    setAge(21);
  }

  return (
    <div>
      Name: <p>{name}</p>
      Age: <p>{age}</p>
      <button onClick={handleChange}>Update Student</button>
    </div>
  );
}

export default App;
