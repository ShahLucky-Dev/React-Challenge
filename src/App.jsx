function App() {
  const users = [
    { id: 1, name: "lucky", age: 20 },
    { id: 2, name: "ratan", age: 20 },
    { id: 3, name: "shivlal", age: 19 },
  ];

  return (
    <div>
      {users.map((user, id) => {
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
