function App() {
  const students = [
    { id: 1, name: "Lucky", marks: 85 },
    { id: 2, name: "Ratan", marks: 42 },
    { id: 3, name: "Shivlal", marks: 76 },
  ];

  const edit = 2;

  const updatedStudends = students.map((student) => {
    if (student.id === edit) {
      marks: 60;
      return {
        ...student,
        marks: 60,
      };
    }
    return student;
  });

  return (
    <div>
      {updatedStudends.map((student) => {
        return (
          <p key={student.id}>
            {student.name}-{student.marks}
          </p>
        );
      })}
    </div>
  );
}

export default App;
