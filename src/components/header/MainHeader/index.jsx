import React from "react";
import {Link} from 'react-router-i18n';
import logo from '../../../svg/logo.svg';
import BipIcon from '../../../svg/components/Bip';
import MainConstant from '../../../constants/MainConstant';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faFont, faLink, faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {toggleContrastVersion, toggleUnderlineLinks} from "../../../extra/theme"

const changeFontSize = e => {
    e.preventDefault();
    
    let
        target = e.target,
        body = document.body,
        fontSize = parseInt(window.getComputedStyle(body).fontSize.replace("px", "")),
        fontAction;
    if (target.tagName === 'svg')
        target = target.parentElement;
    if (target.tagName === 'path')
        target = target.parentElement.parentElement;
    fontAction = target.name === "plus" ? "more" : "less";
    if (fontAction === 'less' && fontSize > 10) fontSize -= 1;
    if (fontAction === 'more' && fontSize < 18) fontSize += 1;
    
    fontSize += "px";
    body.style.fontSize = fontSize;
}

const MainHeader = () => {
    return (
        <div className="d-flex flex-wrap justify-content-between">
            <div className="main-header-container d-flex align-items-center">
                <Link className="logo" to="/">
                    <img src={logo} alt={MainConstant.site_title}/>
                    <span>{MainConstant.site_title}</span>
                </Link>
            </div>
            <div className="page-helper d-flex flex-wrap align-items-center">
                <a href="http://o2.pl" className="helper helper-contrast" onClick={(e) => toggleContrastVersion(e)}>
                    <FontAwesomeIcon icon={faEye} size="2x"/>
                </a>
                <a href="//#endregion" className="helper helper-link" onClick={(e) => toggleUnderlineLinks(e)}>
                    <FontAwesomeIcon icon={faLink} size="2x"/>
                </a>
                <a href="//#endregion" className="helper helper-text-size" name="minus"
                   onClick={(e) => changeFontSize(e)}>
                    <FontAwesomeIcon icon={faFont} size="3x"/>
                    <FontAwesomeIcon icon={faMinus} size="2x"/>
                </a>
                <a href="//#endregion" className="helper helper-text-size" name="plus"
                   onClick={(e) => changeFontSize(e)}>
                    <FontAwesomeIcon icon={faFont} size="3x"/>
                    <FontAwesomeIcon icon={faPlus} size="2x"/>
                </a>
                <a
                    href="//#endregion"
                    className="helper helper-bip"
                    style={{width: 20}}
                >
                    <BipIcon className="link bip"/>
                </a>
            </div>
        </div>
    );
};

export default MainHeader;
