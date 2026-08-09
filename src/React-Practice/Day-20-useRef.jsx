import { useRef } from "react";

function App() {
  const inputRef = useRef(null);
  return (
    <div>
      <input ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus Input
      </button>
    </div>
  );
}

export default App;
