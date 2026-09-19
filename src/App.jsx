// function App() {
//   const fruits = ["apple", "mango", "pineapple", "grapes"];
//   return (
//     <div>
//       {fruits.map((item, index) => {
//         return <li key={index}>{item}</li>;
//       })}
//     </div>
//   );
// }

// export default App;

function App() {
  const users = [
    { id: 1, name: "Lucky", age: 20 },
    { id: 2, name: "Rahul", age: 21 },
    { id: 3, name: "Amit", age: 19 },
  ];
  return (
    <div>
      {users.map((user) => {
        return (
          <p key={user.id}>
            {user.name}-{user.age}
          </p>
        );
      })}
    </div>
  );
}

export default App;
