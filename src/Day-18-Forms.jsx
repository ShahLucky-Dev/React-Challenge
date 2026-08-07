import { useState } from "react";

function App() {
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    /* if (!form.name || !form.email || !form.password) {
      // alert("All Fields are requered"); alert
      setError("please fill the info");

      return;
    }*/

    if (!form.name) {
      setError("Name is Required");
      return;
    }
    if (!form.email.includes("@")) {
      setError("Enter a valid email");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");

    console.log(form);

    setForm({
      name: "",
      email: "",
      password: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
      <h1>{error && <p>{error}</p>}</h1>
    </form>
  );
}

export default App;
