import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  async function addUser() {
    const response = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: {
        "Contact-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: name,
      }),
    });
    const data = await response.json();

    console.log(data);
  }
  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />

      <button onClick={addUser}>Add User</button>
    </div>
  );
}

export default App;
