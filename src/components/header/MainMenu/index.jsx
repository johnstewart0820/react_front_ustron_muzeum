
import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiteInfoContextConsumer } from "../../../constants/SiteInfoContext";

const MainMenu = (props) => {

  return (
    <SiteInfoContextConsumer>
      { ({ header_menu }) => (
        <div className="row">
          <div className="col-md-12">
            <nav className="main-navigation">
              <ul>
                { 
                header_menu && !!header_menu.length &&
                  header_menu.map(({ item, subitems }, index) => (
                    <li key={ index }>
                      <Link activeClassName="active" to={ item.path }>
                        { item.label }
                        {subitems.length > 0 && (
                          <FontAwesomeIcon icon={faChevronDown} size="1x" />
                        )}
                      </Link>
                      <ul>
                        {subitems.map(({path, label}, index) => (
                          <li key={ index }>
                            <Link activeClassName="active" to={path}>
                              {label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                )) }
              </ul>
            </nav>
          </div>
        </div>
      )}
    </SiteInfoContextConsumer>
  );
};

export default withRouter(MainMenu);
