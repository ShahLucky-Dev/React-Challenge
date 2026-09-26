import { useState } from "react";
function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Lucky", age: 20 },
    { id: 2, name: "Ratan", age: 21 },
  ]);

  function handleAdd() {
    setStudents([...students, { id: 3, name: "Shivlal", age: 22 }]);
  }

  return (
    <div>
      {students.map((student) => {
        return (
          <p key={student.id}>
            {student.name}-{student.age}
          </p>
        );
      })}
      <button onClick={handleAdd}>Add Student</button>
    </div>
  );
}

export default App;
