function App() {
  function handleSubmit(e) {
    console.log("Form Submitted");
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        name: <input type="text" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
