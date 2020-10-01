import React from "react";
import PropTypes from "prop-types";

import Language from "./Language";
import MainMenu from "./MainMenu";
import MainSearch from "./Search";
import MainHeader from "./MainHeader";

const Header = (props) => {
  return (
    <header className="main-header">
      <div className="container-fluid pr-5">
        <MainHeader />
        <MainMenu data = {props.menuData}/>
      </div>
      <div className="header-right-col">
        <Language data = {props.languages} />
        <MainSearch />
      </div>
    </header>
  );
};

Header.propTypes = {
  menuData: PropTypes.array,
  languages: PropTypes.array,
};
export default Header;
