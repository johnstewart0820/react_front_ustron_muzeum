import React from "react";
import Language from "./Language";
import MainMenu from "./MainMenu";
import MainSearch from "./Search";
import MainHeader from "./MainHeader";
const Header = () => {

  return (
    <header className="main-header">
      <div className="container-fluid pr-5">
        <MainHeader/>
        <MainMenu />
      </div>
      <div className="header-right-col">
        <Language />
        <MainSearch />
      </div>
    </header>
  );
};

export default Header;
