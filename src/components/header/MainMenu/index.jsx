
import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router";

const MainMenu = () => {

  return (
    <div className="row">
      <div className="col-md-12">
        <nav className="main-navigation">
          <ul>
            <li>
              <Link activeclassName='is-active' to="/about">
                O muzeum
              </Link>
            </li>
            <li>
              <Link activeclassName="active" to="/exhibition">
                Wystawy
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/event">
                Wydarzenia
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/news">
                Aktualnosci
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/chronicle">
                Kronika
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/videos_education">
                Program edukacyjny
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/tourism">
                Turystyka industrialna
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/archive">
                Cyfrowe archiwum
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/contact">
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MainMenu;
