import useState from React;

function App() {
  const [title, setTitle] = useState("");
  const [text,setText]= useState("");
  return (
    <div>
      <h1>Note App</h1>
      <br />
      <input type="text" name="title" id="" />
      <br />
      <textarea name="text" id=""></textarea>
      <br />
      <button>Add</button>
    </div>
  );
}

export default App;
