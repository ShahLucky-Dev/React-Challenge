import { useState } from "react";

function App() {
  const [student, setStudent] = useState({
    name: "Lucky",
    age: 20,
  });
  function handleChange() {
    setStudent({ ...student, name: "Ratan" });
  }

  return (
    <div>
      Name: {student.name}
      Age: {student.age}
      <br />
      <button onClick={handleChange}>Update Name</button>
    </div>
  );
}

export default App;
