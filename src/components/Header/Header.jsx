import React from "react";
import TopNav from "./TopNav";
import MainHeader from "./MainHeader";
import CategoryMenuWrapper from "../MegaMenu/CategoryMenuWrapper";

const Header = () => {
  return (
    <header>
      <TopNav />
      <MainHeader />
      <CategoryMenuWrapper />
    </header>
  );
};

export default Header;
