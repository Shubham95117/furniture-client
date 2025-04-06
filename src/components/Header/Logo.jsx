import React from "react";
import logo from "../../assets/logo1.jpg";
import "../styles/Header.css";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
