import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function Click(event) {
    setTitle(event.target.value);
  }
  return (
    <div>
      <h1>Note App</h1>
      <br />
      <input type="text" name="title" id="" onChange={Click} />
      <br />
      <textarea name="text" id=""></textarea>
      <br />
      <button>Add</button>
    </div>
  );
}

export default App;
