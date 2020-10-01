import React from "react";
import {Link} from 'react-router-i18n';
import logo from '../../../svg/logo.svg';
import bip from '../../../img/bip.png';
import MainConstant from '../../../constants/MainConstant';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faFont, faLink } from "@fortawesome/free-solid-svg-icons";

const MainHeader = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <Link className="logo" to="/">
          <img src={logo} alt={MainConstant.site_title} />
          <span>{MainConstant.site_title}</span>
        </Link>
      </div>
      <div className="col-md-6 justify-content-center">
        {/* helper */}
        <div className="page-helper">
          <a href="http://o2.pl" className="helper helper-contrast">
            <FontAwesomeIcon icon={faEye} size="2x" />
          </a>
          <a href="//#endregion" className="helper helper-link">
            <FontAwesomeIcon icon={faLink} size="2x" />
          </a>
          <a href="//#endregion" className="helper helper-text-size">
            <FontAwesomeIcon icon={faFont} size="1x" />
            <FontAwesomeIcon icon={faFont} size="2x" />
            <FontAwesomeIcon icon={faFont} size="3x" />
          </a>
          <a
            href="//#endregion"
            className="helper helper-bip"
            style={{ width: 20 }}
          >
            <img src={bip} alt={"BIP"} />
          </a>
        </div>
        {/* HELPER */}
      </div>
    </div>
  );
};

export default MainHeader;
