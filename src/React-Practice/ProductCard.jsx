function ProdunctCard(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.price}</h2>
      <h3>{props.company}</h3>
    </div>
  );
}

export default ProdunctCard;

// app jsx

/*import ProdunctCard from "./React-Practice/ProductCard";
function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      company: "Dell",
    },
    {
      id: 2,
      name: "Mouse",
      price: 800,
      company: "Logitech",
    },
    {
      id: 3,
      name: "Keyboard",
      price: 1500,
      company: "HP",
    },
  ];
  return (
    <div>
      {products.map((item) => {
        return (
          <ProdunctCard
            key={item.id}
            name={item.name}
            price={item.price}
            company={item.company}
          />
        );
      })}
    </div>
  );
}

export default App; */
