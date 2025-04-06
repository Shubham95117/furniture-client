import React from "react";
import Logo from "./Logo";
import "../styles/Header.css";
import SearchBar from "./SearchBar";
import UserActions from "./UserActions";
const MainHeader = () => {
  return (
    <div className="main-header">
      <div className="header-left">
        <Logo />
        <SearchBar />
      </div>

      <UserActions />
    </div>
  );
};

export default MainHeader;
