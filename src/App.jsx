import { useState } from "react";
function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Lucky", age: 20 },
    { id: 2, name: "Ratan", age: 21 },
    { id: 3, name: "Shivlal", age: 22 },
  ]);

  function handleEdit(id) {
    const updatedStudents = students.map((student) => {
      if (id === student.id) {
        return {
          ...student,
          age: 25,
        };
      }
      return {
        ...student,
      };
    });
    setStudents(updatedStudents);
  }

  return (
    <div>
      {students.map((student) => {
        return (
          <p key={student.id}>
            {student.name}-{student.age}
            <button onClick={() => handleEdit(student.id)}>Edit</button>
          </p>
        );
      })}
    </div>
  );
}

export default App;
