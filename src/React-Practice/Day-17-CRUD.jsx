import { useState } from "react";

function App() {
  const [fruits, setFruits] = useState([]);
  const [newFruit, setNewFruit] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  function handleChange(e) {
    setNewFruit(e.target.value);
  }

  function handleAdd() {
    if (newFruit.trim() === "") return;

    setFruits([...fruits, newFruit]);
    setNewFruit("");
  }

  function handleDelete(item) {
    setFruits(fruits.filter((fruit) => fruit !== item));
  }

  function handleEdit(index) {
    setNewFruit(fruits[index]);
    setEditIndex(index);
  }

  function handleSave() {
    if (newFruit.trim() === "") return;

    setFruits(
      fruits.map((fruit, index) => {
        if (index === editIndex) {
          return newFruit;
        }
        return fruit;
      }),
    );

    setEditIndex(-1);
    setNewFruit("");
  }

  return (
    <div>
      <input type="text" value={newFruit} onChange={handleChange} />

      {editIndex === -1 ? (
        <button onClick={handleAdd}>Add</button>
      ) : (
        <button onClick={handleSave}>Save</button>
      )}

      {fruits.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item}</h2>

            <button onClick={() => handleEdit(index)}>Edit</button>

            <button onClick={() => handleDelete(item)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
