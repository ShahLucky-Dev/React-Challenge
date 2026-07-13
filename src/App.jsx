import { useState } from "react";

function App() {
  const fruits = ["Apple", "Banana", "Mango"];
  return (
    <div>
      {fruits.map((fruit) => {
        return (
          <div key={fruit}>
            <h1>{fruit}</h1>
          </div>
        );
      })}
    </div>
  );
}
export default App;
