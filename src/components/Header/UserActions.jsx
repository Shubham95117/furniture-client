// src/components/UserActions.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UserActions = () => {
  const { user } = useSelector((state) => state.auth);

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
      {user && user.token ? (
        <Link to="/profile">My Account</Link>
      ) : (
        <Link to="/login">Login / Register</Link>
      )}
    </div>
  );
};

export default UserActions;
