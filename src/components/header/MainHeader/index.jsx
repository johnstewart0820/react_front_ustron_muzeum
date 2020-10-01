import React from "react";
import {Link} from 'react-router-i18n';
import logo from '../../../svg/logo.svg';
import bip from '../../../img/bip.png';
import MainConstant from '../../../constants/MainConstant';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faFont, faLink } from "@fortawesome/free-solid-svg-icons";
import "../../../styles/header/header.scss";
const MainHeader = () => {
  return (
    <div className="section">
      <div className="logo-container">
        <Link className="logo" to="/">
          <img  src={logo} alt={MainConstant.site_title} />
          <span>{MainConstant.site_title}</span>
        </Link>
      </div>
      <div className="header-controller-container">
        <div className="page-helper">
          <a className="helper">
            <FontAwesomeIcon icon={faEye} size="2x" />
          </a>
          <a className="helper">
            <FontAwesomeIcon icon={faLink} size="2x" />
          </a>
          <a className="helper helper-text-size">
            <FontAwesomeIcon icon={faFont} size="1x" />
            <FontAwesomeIcon icon={faFont} size="2x" />
            <FontAwesomeIcon icon={faFont} size="3x" />
          </a>
          <a className="helper helper-bip">
            <img className="bip-image" src={bip} alt={MainConstant.site_title} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
