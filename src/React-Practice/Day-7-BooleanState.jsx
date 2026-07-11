// import { useState } from "react";

// function App() {
//   const [light, setLight] = useState(false);

//   function power() {
//     if (light) {
//       setLight(false);
//     } else {
//       setLight(true);
//     }
//   }

//   return (
//     <div>
//       <h1>{light ? "light on" : "light off"}</h1>
//       <button onClick={power}>OnLight</button>
//     </div>
//   );
// }

// export default App;

import { useState } from "react"; // login - logout

function App() {
  const [isLogin, setIsLogin] = useState(false);

  function handleLogin() {
    setIsLogin(!isLogin);
  }

  return (
    <div>
      <h1>Status:{isLogin ? "logged in" : "logged out"}</h1>

      <button onClick={handleLogin}>{isLogin ? "Logout" : "Login"}</button>
    </div>
  );
}

export default App;
