function App() {
  const students = [
    { id: 1, name: "Lucky", age: 19 },
    { id: 2, name: "ratan", age: 20 },
    { id: 3, name: "shivlal", age: 21 },
  ];

  return (
    <div>
      {students.map((student) => {
        return (
          <div key={student.id}>
            <h1>{student.name}</h1>
            <h2>{student.age}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
