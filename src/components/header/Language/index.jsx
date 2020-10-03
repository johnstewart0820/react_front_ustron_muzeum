import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom';
import { SiteInfoContextConsumer } from "../../../constants/SiteInfoContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Utils from "../../../utils/Locale";

const Language = (props) => {
  const history = useHistory();
  const [locale, setLocale] = useState('');
  const [languages, setLanguages] = useState([]);
  useEffect(() => {
    setLanguages(props.data);
    setLocale(Utils.getLocale());
  })

  const changeLocale = (language) => {
    const location = window.location.href;
    const old_language = Utils.getLocale();
    Utils.setLocale(language);
    const term = location.split(`/${old_language}`);
    setLocale(language);
    if (term.length > 1)
      history.push(`/${language}${term[1]}`);
    else
      history.push(`/${language}`);
  }
  return (
    <SiteInfoContextConsumer>
		{ ({ languages, active_language, changeLanguage }) => (
      <div className="language-switcher">
        <ul>
            {
              languages && languages.map((language) => (
                <li
                  style={{
                    order: locale === language ? `1` : ``,
                    display: locale === language ? `block` : ``,
                  }}
                  key={language}
                  onClick={() => changeLocale(language)}
                >
                  {language}
                  {locale === language && (
                    <FontAwesomeIcon icon={faChevronDown} size="1x" />
                  )}
                </li>
              ))
            }
        </ul>
      </div>
    )}
    </SiteInfoContextConsumer>
  );
};

export default Language;
