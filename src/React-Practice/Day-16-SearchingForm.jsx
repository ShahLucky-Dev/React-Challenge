import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const users = ["lucky", "ratan", "shivlal", "khushbu", "sadhna", "payal"];
  const filteredUsers = users.filter((item) => {
    item.toLowerCase().includes(search.toLowerCase());
  });

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <input type="text" value={search} onChange={handleSearch} />

      {filteredUsers.map((item) => {
        return <h2>{search}</h2>;
      })}
    </div>
  );
}

export default App;
