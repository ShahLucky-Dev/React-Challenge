import { useState } from "react";

function App() {
  const arr = [10, 20, 30, 40];

  return (
    <div>
      {arr.filter((item) => {
        return item >= 30;
      })}
    </div>
  );
}

export default App;
