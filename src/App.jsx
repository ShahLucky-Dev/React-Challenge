import { useState } from "react";
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
        <input type="text" value={name} onChange={handleChange} />
        <br /> <input type="text" value={age} onChange={handleAge} />
        <button>Submit</button>
        <h1>{name}</h1>
        <p>{age}</p>
        {students.map((std) => {
          return (
            <p key={std.id}>
              {std.name}-{std.age}
            </p>
          );
        })}
      </div>
    </form>
  );
}

export default App;
