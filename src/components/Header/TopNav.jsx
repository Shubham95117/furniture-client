// src/components/TopNav.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

const TopNav = () => {
  return (
    <div className="top-nav">
      <NavLink
        to="/franchise-enquiry"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        Franchise Enquiry
      </NavLink>{" "}
      |
      <NavLink
        to="/warranty-registration"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        Warranty Registration
      </NavLink>{" "}
      |
      <NavLink
        to="/track-order"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        Track Your Order
      </NavLink>{" "}
      |
      <NavLink
        to="/our-store"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        Our Store
      </NavLink>
    </div>
  );
};

export default TopNav;
