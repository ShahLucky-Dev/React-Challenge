function App() {
  const isPremium = true;
  return <div>{isPremium && <button>Download</button>}</div>;
}

export default App;
