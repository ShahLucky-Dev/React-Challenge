function App() {
  const students = [
    { id: 1, name: "Lucky", marks: 85 },
    { id: 2, name: "Rahul", marks: 42 },
    { id: 3, name: "Amit", marks: 76 },
    { id: 4, name: "Jay", marks: 35 },
  ];

  const filterStudent = students.filter((mark) => mark.marks >= 50);
  return (
    <div>
      {filterStudent.map((mark) => {
        return (
          <p key={mark.id}>
            {mark.name}-{mark.marks}
          </p>
        );
      })}
    </div>
  );
}

export default App;
