// function App() {
//   const age = 19;
//   return <div>{age >= 18 ? <h1>vote allowed</h1> : <h1>not allowed</h1>}</div>;
// }

// function App() {
//   const isStudent = true;
//   return <div>{isStudent && <h1>Discount Avalilable</h1>}</div>;
// }

// practice question
function App() {
  const isPremium = true;
  const isVerified = true;
  return (
    <div>
      {isPremium ? <h1>Premium User</h1> : <h1>Normal User</h1>}
      {isVerified && <h1>Verified</h1>}
    </div>
  );
}

export default App;
