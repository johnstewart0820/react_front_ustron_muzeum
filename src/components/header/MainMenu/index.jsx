
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
        <div className="row main-header-navigation open-sans">
          <div className="col-md-12">
            <nav className="main-navigation">
              <ul>
                {
                header_menu && !!header_menu.length &&
                  header_menu.map(({ item, subitems }, index) => (
                    <li key={ index }>
                      <Link activeclassname="active" to={ item.path }>
                        { item.label }
                        {subitems.length > 0 && (
                          <FontAwesomeIcon icon={faChevronDown} size="1x" />
                        )}
                      </Link>
                      <ul>
                        {subitems.map(({path, label, inside}, index) => (
                          <li key={ index }>
                            {inside === true ? 
                              <Link activeclassname="active" to={path}>
                                {label}
                              </Link>
                              :
                            <a href={path} target='_blank'>{label}</a>  
                            }

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
