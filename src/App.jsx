import { useState } from "react";
import "./App.css";
function App() {
  const [name, setName] = useState("");

  const [age, setAge] = useState("");

  const [students, setStudents] = useState([]);

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleAge(e) {
    setAge(e.target.value);
  }

  function handleDelete(id) {
    const newArray = students.filter((student) => {
      return id !== student.id;
    });
    setStudents(newArray);
  }

  function handleEdit(id) {
    console.log(id);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "" || age === "") {
      alert("enter data");
      return;
    }

    const student = {
      id: Date.now(),
      name: name,
      age: age,
    };

    setStudents([...students, student]);
    setName("");
    setAge("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="container">
          <input type="text" value={name} onChange={handleChange} />
          <br />
          <br /> <input type="text" value={age} onChange={handleAge} />
          <br />
          <br />
          <button className="btnSub" type="submit">
            Submit
          </button>
        </div>
        <h1>{name}</h1>
        <p>{age}</p>
        {students.map((std) => {
          return (
            <p key={std.id}>
              {std.name}-{std.age}
              <button type="button" onClick={() => handleDelete(std.id)}>
                Delete
              </button>
              <button type="button" onClick={() => handleEdit(std.id)}>
                Edit
              </button>
            </p>
          );
        })}
      </div>
    </form>
  );
}

export default App;
