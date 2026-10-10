import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>SpendWise</h1>
        <h1>Dashboard</h1>
      </div>
      <div className="hero">
        <h3>
          Total Balance <br />
          0₹
        </h3>
        <h3>
          Income <br />
          0₹
        </h3>
        <h3>
          Expenses <br />
          0₹
        </h3>
      </div>
      <div className="detail">
        <h2>Recent Transaction</h2>
        <br />
        <h2>No transaction yet</h2>
      </div>
    </div>
  );
}

export default App;
