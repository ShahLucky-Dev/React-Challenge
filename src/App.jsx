function App() {
  function showname(name) {
    console.log(name);
  }
  return (
    <div>
      <button onClick={() => showname("lucky")}>lucky</button>
      <button onClick={() => showname("ratan")}>ratan</button>
      <button onClick={() => showname("shivlal")}>shivlal</button>
    </div>
  );
}

export default App;
