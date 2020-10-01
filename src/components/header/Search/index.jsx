import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../../../styles/header/header.scss";
const MainSearch = () => {
  return (
    <div className="main-search">

      <span className="main-search-trigger">
        <FontAwesomeIcon icon={faSearch} size="2x" />
      </span>

      <div className="search-bar">
        <form action="//#endregion">
          <button type="reset">
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <input type="text" placeholder="Szukaj" />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default MainSearch;
