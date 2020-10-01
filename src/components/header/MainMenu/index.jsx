
import React from "react";
import { Link } from "react-router-i18n";
import PropTypes from "prop-types";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const handleAPILink = (data) => {
  let link = "";
  if (data.item.article) {
    // article
    link = "#";
  }

  if (data.item.category) {
    // category
    link = "";
  }

  return link;
};

const MainMenu = (props) => {
  let menu = props.data;
  return (
    <div className="row">
      <div className="col-md-12">
        <nav className="main-navigation">
          <ul>
            {menu.map((menuItem) => (
              <li key={menuItem.item.id}>
                <Link activeClassName="active" to={handleAPILink(menuItem)}>
                  {menuItem.item.name}
                  {menuItem.subitems.length > 0 && (
                    <FontAwesomeIcon icon={faChevronDown} size="1x" />
                  )}
                </Link>
                <ul>
                  {menuItem.subitems.map((item) => (
                    <li>
                      <Link activeClassName="active" to={handleAPILink(item)}>
                        {item.item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

MainMenu.propTypes = {
  data: PropTypes.array,
};
export default MainMenu;
