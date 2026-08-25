import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");

  const [transactions, setTransactions] = useState([]);

  const [editId, setEditId] = useState(null);

  function handleAdd() {
    if (!title.trim() || !amount) return;

    const newTransaction = {
      id: Date.now(),
      title: title,
      amount: Number(amount),
      type: type,
    };

    setTransactions([...transactions, newTransaction]);

    setTitle("");
    setAmount("");
    setType("expense");
  }

  function handleDelete(id) {
    const updatedTransactions = transactions.filter((item) => item.id !== id);

    setTransactions(updatedTransactions);
  }

  function handleEdit(transaction) {
    setEditId(transaction.id);
    setTitle(transaction.title);
    setAmount(transaction.amount);
    setType(transaction.type);
  }

  function handleUpdate() {
    const updatedTransactions = transactions.map((item) => {
      if (item.id === editId) {
        return {
          ...item,
          title: title,
          amount: Number(amount),
          type: type,
        };
      }

      return item;
    });

    setTransactions(updatedTransactions);

    setEditId(null);
    setTitle("");
    setAmount("");
    setType("expense");
  }

  const income = transactions
    .filter((item) => item.type === "income")
    .reduce((total, item) => total + item.amount, 0);

  const expense = transactions
    .filter((item) => item.type === "expense")
    .reduce((total, item) => total + item.amount, 0);

  const balance = income - expense;

  return (
    <div className="app">
      <header className="header">
        <h1>💰 Expense Tracker</h1>
        <p>Track your income and expenses</p>
      </header>

      <div className="balance-card">
        <p>Total Balance</p>
        <h2>₹{balance}</h2>
      </div>

      <div className="summary">
        <div className="summary-card income">
          <p>Income</p>
          <h2>₹{income}</h2>
        </div>

        <div className="summary-card expense">
          <p>Expense</p>
          <h2>₹{expense}</h2>
        </div>
      </div>

      <div className="form-card">
        <h2>{editId === null ? "Add Transaction" : "Edit Transaction"}</h2>

        <input
          type="text"
          placeholder="Transaction name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        {editId === null ? (
          <button onClick={handleAdd}>Add Transaction</button>
        ) : (
          <button onClick={handleUpdate}>Update Transaction</button>
        )}
      </div>

      <div className="transactions">
        <h2>Transactions</h2>

        {transactions.length === 0 ? (
          <p className="empty">No transactions yet.</p>
        ) : (
          transactions.map((item) => (
            <div
              className={`transaction ${
                item.type === "income"
                  ? "transaction-income"
                  : "transaction-expense"
              }`}
              key={item.id}
            >
              <div>
                <h3>{item.title}</h3>

                <span>{item.type === "income" ? "Income" : "Expense"}</span>
              </div>

              <div className="transaction-right">
                <strong>
                  {item.type === "income" ? "+" : "-"}₹{item.amount}
                </strong>

                <button className="edit" onClick={() => handleEdit(item)}>
                  Edit
                </button>

                <button
                  className="delete"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
