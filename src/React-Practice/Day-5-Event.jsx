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
