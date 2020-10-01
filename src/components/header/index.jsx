
import React from "react";
import Language from "./Language";
import MainMenu from "./MainMenu";
import Search from "./Search";
import MainHeader from "./MainHeader";
import "../../styles/header/header.scss";

const Header = () => {

  return (
    <header className="header">
      <div className="main-header-container">
        <MainHeader/>
        <MainMenu/>
      </div>
      <div className="main-option-container">
        <Language />
        <Search />
      </div>
    </header>
  );
};

export default Header;
