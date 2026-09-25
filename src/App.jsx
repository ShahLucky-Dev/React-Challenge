function App() {
  let count = 0;
  function handleClick() {
    count = count + 1;
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default App;
