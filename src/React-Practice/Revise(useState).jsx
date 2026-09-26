/*import { useState } from "react";
function App() {
  const [name, setName] = useState("");

  function updateName() {
    console.log(name);
  }

  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <div>
      Name: <input type="text" onChange={handleChange} />
      <button onClick={updateName}>Show</button>
    </div>
  );
}

export default App;
*/

/*import { useState } from "react";

function App() {
  const [Like, setLike] = useState(0);

  function Liked() {
    setLike(Like + 1);
  }

  return (
    <div>
      Like:<h1>{Like}</h1>
      <button onClick={Liked}>❤️</button>
    </div>
  );
}

export default App;*/

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

/*import { useState } from "react";

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
*/

/*import { useState } from "react";

function App() {
  const [students, setStudent] = useState([
    { id: 1, name: "Lucky", age: 20 },
    { id: 2, name: "Ratan", age: 21 },
    { id: 3, name: "Shivlal", age: 22 },
  ]);

  return (
    <div>
      {students.map((student) => {
        return (
          <p key={student.id}>
            {student.name}-{student.age}
          </p>
        );
      })}
    </div>
  );
}

export default App;*/

/*import { useState } from "react";
function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Lucky", age: 20 },
    { id: 2, name: "Ratan", age: 21 },
    { id: 3, name: "Shivlal", age: 22 },
  ]);

  function handleDelete(id) {
    const newArray = students.filter((student) => student.id !== id);
    setStudents(newArray);
  }

  return (
    <div>
      {students.map((student) => {
        return (
          <p key={student.id}>
            {student.name}-{student.age}
            <button onClick={() => handleDelete(student.id)}>Delete</button>
          </p>
        );
      })}
    </div>
  );
}

export default App;*/
