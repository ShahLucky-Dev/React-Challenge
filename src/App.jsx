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

// function App() {
//   const users = [
//     { id: 1, name: "Lucky", age: 20 },
//     { id: 2, name: "Rahul", age: 21 },
//     { id: 3, name: "Amit", age: 19 },
//   ];
//   return (
//     <div>
//       {users.map((user) => {
//         return (
//           <p key={user.id}>
//             {user.name}-{user.age}
//           </p>
//         );
//       })}
//     </div>
//   );
// }

// export default App;

function App() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Keyboard", price: 1500 },
    { id: 4, name: "Monitor", price: 12000 },
  ];

  const productFilter = products.filter((product) => product.price > 11000);

  return (
    <div>
      {productFilter.map((product) => {
        return (
          <p key={product.id}>
            {product.name} - ₹{product.price}
          </p>
        );
      })}
    </div>
  );
}

export default App;
