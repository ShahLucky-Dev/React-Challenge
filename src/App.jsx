import BookCard from "./React-Practice/Day-3-practical";

function App() {
  return (
    <div>
      <BookCard title="your name" author="hana" price={250} />
      <BookCard title="riuk" author="light" price={200} />
      <BookCard title="deathnote" author="L" price={150} />
    </div>
  );
}

export default App;
