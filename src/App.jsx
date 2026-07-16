import { useState } from "react";

function App() {
  const [show, setShowNext] = useState(false);
  const [student, setStudent] = useState({
    name: "lucky",
    age: 19,
    city: "surat",
  });

  function Nextstud() {
    setStudent({
      ...student,
      name: "shiv",
      age: 21,
      city: "varodra",
    });
  }

  function increaseAge() {
    setStudent({
      ...student,
      age: student.age + 1,
    });
  }

  function Show() {
    setShowNext(!show);
  }
  return (
    <div>
      <button onClick={Show}>{show ? "previous" : "next"}</button>
      <button onClick={increaseAge}>increaseAge</button>
      <h1>{student.name}</h1>
      <h1>{student.age}</h1>
      <h1>{student.city}</h1>
    </div>
  );
}

export default App;
