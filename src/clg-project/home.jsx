import React, { useState } from "react";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const foodItems = [
    {
      id: 1,
      name: "Paneer Butter Masala",
      price: 250,
      category: "North Indian",
      image:
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Masala Dosa",
      price: 180,
      category: "South Indian",
      image:
        "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400",
      rating: 4.3,
    },
    {
      id: 3,
      name: "Chicken Biryani",
      price: 220,
      category: "Biryani",
      image:
        "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Margherita Pizza",
      price: 199,
      category: "Pizza",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
      rating: 4.2,
    },
    {
      id: 5,
      name: "Veg Burger",
      price: 99,
      category: "Burger",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
      rating: 4.0,
    },
    {
      id: 6,
      name: "Chowmein",
      price: 150,
      category: "Chinese",
      image:
        "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400",
      rating: 4.4,
    },
    {
      id: 7,
      name: "Dal Makhani",
      price: 200,
      category: "North Indian",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400",
      rating: 4.6,
    },
    {
      id: 8,
      name: "Idli Sambhar",
      price: 120,
      category: "South Indian",
      image:
        "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400",
      rating: 4.1,
    },
    {
      id: 9,
      name: "Veg Biryani",
      price: 180,
      category: "Biryani",
      image:
        "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?w=400",
      rating: 4.3,
    },
    {
      id: 10,
      name: "Pepperoni Pizza",
      price: 299,
      category: "Pizza",
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400",
      rating: 4.5,
    },
    {
      id: 11,
      name: "Cheese Burger",
      price: 149,
      category: "Burger",
      image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400",
      rating: 4.4,
    },
    {
      id: 12,
      name: "Manchurian",
      price: 170,
      category: "Chinese",
      image:
        "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400",
      rating: 4.2,
    },
  ];

  const filters = [
    "All",
    "North Indian",
    "South Indian",
    "Biryani",
    "Pizza",
    "Burger",
    "Chinese",
  ];

  const filteredFood = foodItems.filter((item) => {
    const matchesFilter =
      selectedFilter === "All" || item.category === selectedFilter;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">🍽️</span>
            <h1>DineNow</h1>
          </div>

          <div className="nav-links">
            <a href="#home" className="active">
              Home
            </a>
            <a href="#orders">My Orders</a>
            <a href="#login">Login</a>
          </div>

          <div
            className="cart-icon"
            onClick={() => alert(`Cart mein ${cartCount} items hain!`)}
          >
            <span className="cart-emoji">🛒</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h2>
          Delicious Food, <span className="highlight">Fast Delivery</span>
        </h2>
        <p>Apne favourite restaurants se mangaye ghar baithe tasty khana</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="🔍 Search for dishes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Filter Section */}
      <div className="filter-section">
        <h3>Explore Our Menu</h3>
        <div className="filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${selectedFilter === filter ? "active" : ""}`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Food Grid */}
      <div className="food-grid">
        {filteredFood.map((item) => (
          <div key={item.id} className="food-card">
            <div className="food-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="food-info">
              <h4>{item.name}</h4>
              <div className="food-meta">
                <span className="rating">⭐ {item.rating}</span>
                <span className="category-tag">{item.category}</span>
              </div>
              <div className="food-footer">
                <span className="price">₹{item.price}</span>
                <button className="add-btn" onClick={addToCart}>
                  Add to Cart +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 DineNow. All rights reserved.</p>
        <p>Made with ❤️ for food lovers</p>
      </footer>
    </div>
  );
}

export default App;
