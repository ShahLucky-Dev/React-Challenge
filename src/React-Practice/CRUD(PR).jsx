import { useState } from "react";
import "./App.css";
function App() {
  const [name, setName] = useState("");

  const [age, setAge] = useState("");

  const [students, setStudents] = useState([]);

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleAge(e) {
    setAge(e.target.value);
  }

  function handleDelete(id) {
    const newArray = students.filter((student) => {
      return id !== student.id;
    });
    setStudents(newArray);
  }

  function handleEdit(id) {
    const student = students.find((student) => {
      return student.id === id;
    });
    setName(student.name);
    setAge(student.age);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "" || age === "") {
      alert("enter data");
      return;
    }

    const student = {
      id: Date.now(),
      name: name,
      age: age,
    };

    setStudents([...students, student]);
    setName("");
    setAge("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="container">
          <input type="text" value={name} onChange={handleChange} />
          <br />
          <br /> <input type="text" value={age} onChange={handleAge} />
          <br />
          <br />
          <button className="btnSub" type="submit">
            Submit
          </button>
        </div>
        <h1>{name}</h1>
        <p>{age}</p>
        {students.map((std) => {
          return (
            <p key={std.id}>
              {std.name}-{std.age}
              <button type="button" onClick={() => handleDelete(std.id)}>
                Delete
              </button>
              <button type="button" onClick={() => handleEdit(std.id)}>
                Edit
              </button>
            </p>
          );
        })}
      </div>
    </form>
  );
}

export default App;

// * {
//   box-sizing: border-box;
//   margin: 0;
//   padding: 0;
// }

// body {
//   min-height: 100vh;
//   font-family: Arial, sans-serif;
//   background: #f4f6f8;
//   padding: 50px 20px;
// }

// form {
//   width: 100%;
// }

// form > div {
//   width: 100%;
//   max-width: 650px;
//   margin: auto;
// }

// /* Form Container */
// .container {
//   background: white;
//   padding: 30px;
//   border-radius: 14px;
//   box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
// }

// /* Inputs */
// .container input {
//   width: 100%;
//   padding: 13px 15px;
//   border: 1px solid #d6dbe1;
//   border-radius: 8px;
//   outline: none;
//   font-size: 16px;
//   transition: 0.2s;
// }

// .container input:focus {
//   border-color: #4f46e5;
//   box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.12);
// }

// /* Submit Button */
// .btnSub {
//   width: 100%;
//   margin-top: 5px;
//   padding: 13px;
//   border: none;
//   border-radius: 8px;
//   background: #4f46e5;
//   color: white;
//   font-size: 16px;
//   font-weight: 600;
//   cursor: pointer;
//   transition: 0.2s;
// }

// .btnSub:hover {
//   background: #4338ca;
//   transform: translateY(-1px);
// }

// /* Current Input Values */
// form > div > h1 {
//   margin-top: 30px;
//   font-size: 24px;
//   color: #222;
// }

// form > div > p {
//   color: #666;
//   margin-top: 5px;
// }

// /* Student List */
// form > div > p {
//   background: white;
//   padding: 15px 18px;
//   margin-top: 12px;
//   border-radius: 10px;
//   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   color: #222;
//   font-size: 16px;
// }

// /* Delete Button */
// form > div > p button {
//   border: none;
//   padding: 7px 12px;
//   border-radius: 6px;
//   background: #ef4444;
//   color: white;
//   cursor: pointer;
//   font-size: 14px;
//   transition: 0.2s;
// }

// form > div > p button:hover {
//   background: #dc2626;
// }
