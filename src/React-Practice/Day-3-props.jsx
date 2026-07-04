function StudentCard(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.course}</h1>
    </div>
  );
}

export default StudentCard;

// import StudentCard from "./React-Practice/Day-3-props.jsx";

// function App() {
//   return (
//     <div>
//       <StudentCard name="lucky" age={19} course="bca" />
//       <StudentCard name="ratan" age={20} course="bussines" />
//       <StudentCard name="shivlal" age={20} course="job" />
//     </div>
//   );
// }

// export default App;
