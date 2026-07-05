function BookCard({ title, author, price }) {
  return (
    <div>
      <h2>{title}</h2>
      <h2>{author}</h2>
      <h2>{price}</h2>
    </div>
  );
}

export default BookCard;

// import BookCard from "./React-Practice/Day-4-PropDestructring";

// function App() {
//   return (
//     <div>
//       <BookCard title="your name" author="hana" price={250} />
//       <BookCard title="riuk" author="light" price={200} />
//       <BookCard title="deathnote" author="L" price={150} />
//     </div>
//   );
// }

// export default App;
