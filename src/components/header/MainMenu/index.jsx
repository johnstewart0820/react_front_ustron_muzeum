
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Utils from "../../../utils/Locale";

const MainMenu = (props) => {
  let menu = props.data;

  const handleAPILink = (data) => {
    let link = "#";
    const language = Utils.getLocale();
    if (data.item.article) {
      // article
      link = `/${language}/${data.item.article.slug.replaceAll(' ', '')},${data.item.article.id}`
    }
  
    else if ( !data.item.subitems && (!data.subitems || data.subitems.length == 0)) {
      // category
      link = `/${language}/${data.item.name.replaceAll(' ', '')},${data.item.id}`
    }
    return link;
  };

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
export default withRouter(MainMenu);
