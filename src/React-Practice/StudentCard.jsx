function StudentCard({ name, age, course }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{course}</h3>
    </div>
  );
}

export default StudentCard;

// import StudentCard from "./React-Practice/StudentCard";
// function App() {
//   return (
//     <div>
//       <StudentCard name="Lucky" age={19} course="bca" />
//       <StudentCard name="ratan" age={20} course="bussines" />
//       <StudentCard name="shivlal" age={20} course="job" />
//     </div>
//   );
// }

// export default App;
