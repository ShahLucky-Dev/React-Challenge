function App() {
  function showMsg() {
    console.log("welcome to react");
  }
  return (
    <div>
      <button onClick={showMsg}>showMsg</button>
    </div>
  );
}

export default App;

// function App() {
//   function showname(name) {
//     console.log(name);
//   }
//   return (
//     <div>
//       <button onClick={() => showname("lucky")}>lucky</button>
//       <button onClick={() => showname("ratan")}>ratan</button>
//       <button onClick={() => showname("shivlal")}>shivlal</button>
//     </div>
//   );
// }

// export default App;
