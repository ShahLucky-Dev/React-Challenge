function StudentCard(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
    </div>
  );
}

export default StudentCard;

//app.jsx
// import StudentCard from "./React-Practice/Day-9-map+props";

// function App() {
//   const students = [
//     { id: 1, name: "lucky", age: 19 },
//     { id: 2, name: "ratan", age: 19 },
//     { id: 3, name: "shivlal", age: 19 },
//   ];
//   return (
//     <div>
//       {students.map((student) => {
//         return (
//           <StudentCard key={student.id} name={student.name} age={student.age} />
//         );
//       })}
//     </div>
//   );
// }

// export default App;
