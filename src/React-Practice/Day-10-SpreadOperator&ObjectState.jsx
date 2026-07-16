// question - 1.....
/*
import { useState } from "react";

function App() {
  const [student, setStudent] = useState({
    name: "lucky",
    age: 19,
    city: "surat",
  });

  function ChangeName() {
    setStudent({
      ...student,
      name: "shiv",
    });
  }
  return (
    <div>
      <button onClick={ChangeName}>Name</button>
      <h1>{student.name}</h1>
      <h1>{student.age}</h1>
      <h1>{student.city}</h1>
    </div>
  );
}

export default App;
*/

/// question - 2.......

/*
import { useState } from "react";

function App() {
  const [student, setStudent] = useState({
    name: "lucky",
    age: 19,
    city: "surat",
  });

  function ChangeName() {
    setStudent({
      ...student,
      name: "shiv",
    });
  }

  function increaseAge() {
    setStudent({
      ...student,
      age: student.age + 1,
    });
  }
  return (
    <div>
      <button onClick={ChangeName}>Name</button>
      <button onClick={increaseAge}>increaseAge</button>
      <h1>{student.name}</h1>
      <h1>{student.age}</h1>
      <h1>{student.city}</h1>
    </div>
  );
}

export default App;
*/
