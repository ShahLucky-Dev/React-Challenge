// import { useState } from "react";  //insta like button

// function App() {
//   const [like, setLike] = useState(false);

//   function handleLike() {
//     setLike(!like);
//   }

//   return (
//     <div>
//       <h2>{like ? "❤️" : "🤍"}</h2>
//       <button onClick={handleLike}>{like ? "Unlike" : "Like"}</button>
//     </div>
//   );
// }

// export default App;

import { useState } from "react"; // Change Mode

function App() {
  const [dark, setDark] = useState(false);

  function Mode() {
    setDark(!dark);
  }
  return (
    <div>
      <h1>{dark ? "LightMode" : "DarkMode"}</h1>
      <button onClick={Mode}>Switch</button>
    </div>
  );
}

export default App;
