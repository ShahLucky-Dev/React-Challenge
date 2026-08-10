import useFetch from "./React-Practice/useFetch";

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
        return <p key={item.id}>{item.firstName}</p>;
      })}
    </div>
  );
}

export default App;
