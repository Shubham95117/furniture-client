// src/components/UserActions.jsx
import React from "react";
import { Link } from "react-router-dom";
// import "../styles/Header.css";
const UserActions = () => {
  return (
    <div className="user-actions">
      <Link to="/best-deal" className="best-deal" style={{ color: "#0093dd" }}>
        <i className="fa-solid fa-percent"></i> Best Deal
      </Link>
      <Link to="/favorites" className="favorites">
        <i className="fa-regular fa-heart"></i> Favorites
      </Link>
      <Link to="/cart" className="cart-link">
        <i className="fa-solid fa-shopping-cart"></i> Cart
      </Link>
      <Link to="/login">Login / Register</Link>
    </div>
  );
};

export default UserActions;
