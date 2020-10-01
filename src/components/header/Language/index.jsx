import React from "react";
// import { changeLocale, IntlContextConsumer } from "gatsby-plugin-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
let languages = ["en", "de"];
const Language = () => {

  return (
    <div className="language-switcher">
      <ul>
          {
            languages.map((language) => (
              <li
                style={{
                  order: "en" === language ? `1` : ``,
                  display: "de" === language ? `block` : ``,
                }}
                key={language}
                
              >
                {language}
                {"en" === language && (
                  <FontAwesomeIcon icon={faChevronDown} size="1x" />
                )}
              </li>
            ))
          }
      </ul>
    </div>
  );
};

export default Language;
