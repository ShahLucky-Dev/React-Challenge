// import { useState } from "react";

// function App() {
//   const [name, setname] = useState("lucky");

//   function changeName() {
//     setname("ratan");
//   }

//   return (
//     <div>
//       <h1>{name}</h1>
//       <button onClick={changeName}>changename</button>
//     </div>
//   );
// }

// export default App;

import { useState } from "react"; // toggle practical

function App() {
  const [name, setName] = useState("lucky");

  function changeName() {
    if (name === "lucky") {
      setName("ratan");
    } else {
      setName("lucky");
    }
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>change name</button>
    </div>
  );
}

export default App;
