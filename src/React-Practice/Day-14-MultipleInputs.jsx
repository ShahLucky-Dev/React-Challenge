import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    console.log(e.target.name);
    console.log(e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleClick() {}

  return (
    <div>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />

      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
