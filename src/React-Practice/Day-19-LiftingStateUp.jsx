function App() {
  return (
    <div>
      <ChildA />
      <ChildB />
    </div>
  );
}

function ChildA() {
  return <h1>Child A</h1>;
}

function ChildB() {
  return <h1>Child B</h1>;
}

export default App;
