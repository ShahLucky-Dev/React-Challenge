function App() {
  // Array of objects
  const students = [
    { id: 1, name: "Lucky", age: 19 },
    { id: 2, name: "Ratan", age: 20 },
    { id: 3, name: "Shivlal", age: 20 },
  ];

  return (
    <div>
      <h1>Student List</h1>

      {students.map((student) => {
        return (
          // key sirf React ke liye hai
          <div key={student.id}>
            <h2>Name: {student.name}</h2>
            <p>Age: {student.age}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;
