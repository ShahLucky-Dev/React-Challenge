import { useState } from "react";

function App() {
  const [students, setStudents] = useState([
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

export default App;
