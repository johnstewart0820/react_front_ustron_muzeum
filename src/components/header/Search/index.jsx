import React, {useState} from "react";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import {useHistory, Link} from "react-router-dom";
import Utils from "../../../utils/Locale";

const MainSearch = () => {
  const [valueInput, setValueInput] = React.useState("");
  const history = useHistory();
  const input = document.getElementById("q");
  const locale = Utils.getLocale();
  if (input) {
      input.addEventListener("keyup", function (e) {
          if (e.keyCode === 13) {
              e.preventDefault();
              document.getElementById("click").click();
          }
      });
  }
  const handleClick = (e) => {
    e.preventDefault();
    history.push({pathname: `/${locale}/search/${valueInput}`});
  }

  return (
    <div className="main-search">
      <span className="main-search-trigger">
        <FontAwesomeIcon icon={faSearch} size="2x" />
      </span>

        <div className="search-bar">
          <form onSubmit={() => {return false;}}>
            <button type="reset" onClick={e => setValueInput('')}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <input type="text" id="q" placeholder="Szukaj" onChange={e => setValueInput(e.target.value)}/>
            <button id="click" onClick={(e) => handleClick(e)}>
              <FontAwesomeIcon icon={faSearch}/>
            </button>
          </form>
        </div>

    </div>
  );
};

export default withRouter(MainSearch);
