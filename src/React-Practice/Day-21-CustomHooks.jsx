import useFetch from "./React-Practice/useFetch";
import "./App.css";
function App() {
  const { data, loading, error } = useFetch("https://dummyjson.com/users");

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error loading data</h2>;
  }

  return (
    <div>
      {data.users.map((item) => {
        return (
          <p className="name" key={item.id}>
            {item.firstName}
          </p>
        );
      })}
    </div>
  );
}

export default App;
