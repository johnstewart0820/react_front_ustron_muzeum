import React from "react";
import PropTypes from "prop-types";

import Language from "./Language";
import MainMenu from "./MainMenu";
import MainSearch from "./Search";
import MainHeader from "./MainHeader";
import SideMenu from "./SideMenu";

const Header = (props) => {
    return (
        <header className="main-header d-flex justify-content-between">
            <div className="header-bar">
                <MainHeader />
                <MainMenu/>
            </div>
            <div className="header-right-col">
                <Language />
                <MainSearch />
                <SideMenu />
            </div>
        </header>
    );
};

export default Header;
