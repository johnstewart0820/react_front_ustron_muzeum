import React, { useState } from 'react';
import { SiteInfoContextConsumer } from "../../../constants/SiteInfoContext";
import { useHistory, Link } from "react-router-dom";
import BipIcon from '../../../svg/components/Bip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faFont, faLink, faMinus, faPlus, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { toggleContrastVersion, toggleUnderlineLinks } from "../../../extra/theme"

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

const MainMenu = (props) => {
    const history = useHistory();
    const [open_menu, setOpenMenu] = useState(null);
    const [open_sub_menu, setOpenSubMenu] = useState(null);

    function toggleMobileMenu(e, index) {
        e.preventDefault();
        setOpenMenu(open_menu === index ? -1 : index);
    }
    function toggleMobileSubMenu(e, index) {
        e.preventDefault();
        setOpenSubMenu(open_sub_menu === index ? -1 : index);
    }

    return (
        <SiteInfoContextConsumer>
            { ({ header_menu }) => (
                <div className="main-menu">

                    { header_menu.map(({ item, subitems }, index) => {
                        const column_classes = ["main-menu__column", open_menu === index ? "mobile-open" : ""];

                        return (
                            <div key={index} className={column_classes.join(" ")} >
                                <Link to={item.path} className="main-menu__title" rel={'noopener noreferrer'}>

                                    {(!subitems || !subitems.length) ? <span className="sidebar-nochildren-span" onClick={(e) => (history.push(item.path), props.onNavigate(e))}> {item.label} </span> : <span onClick={e => (history.push(item.path),toggleMobileMenu(e, index))}> {item.label} </span>}
                                    {subitems && !!subitems.length &&
                                        <FontAwesomeIcon onClick={e => toggleMobileMenu(e, index)} icon={faAngleDown} size="1x" />}

                                </Link>

                                { subitems && !!subitems.length &&
                                    <div className="main-menu__items">
                                        {subitems.map(({ item, subitems }, index) => {
                                            const column_classes = ["main-menu__column_sub", open_sub_menu === index ? "mobile-open-sub" : ""];
                                            return (
                                                <div key={index} className={column_classes.join(" ")}>
                                                    {item.inside === true ?
                                                    <Link key={index} to={item.path} rel={'noopener noreferrer'} >
                                                        {(!subitems || !subitems.length) ? <span className="sidebar-nochildren-span" onClick={(e) => (history.push(item.path), props.onNavigate(e))}> {item.label} </span> : <span onClick={e => (history.push(item.path),toggleMobileSubMenu(e, index))}> {item.label} </span>}
                                                        {subitems && !!subitems.length &&
                                                            <FontAwesomeIcon onClick={e => toggleMobileSubMenu(e, index)} icon={faAngleDown} size="1x" />}
                                                    </Link>
                                                    :
                                                    <a href={item.path} target='_blank'>{item.label}</a>  
                                                        }
                                                    {
                                                    subitems && !!subitems.length &&
                                                    <div className="main-menu__items_sub">
                                                        {subitems.map(({ path, label }, index) => (
                                                            <Link to={path} key={index} rel={'noopener noreferrer'}>

                                                                { <span className="sidebar-nochildren-span" onClick={(e) => (history.push(path), props.onNavigate(e))}> {label} </span>}

                                                            </Link>
                                                        ))
                                                        }
                                                    </div>
                                                    }
                                                </div>

                                            )
                                        })}
                                    </div>
                                }
                            </div>
                        )
                    })}
                    <div className="page-helper-bottom d-flex flex-wrap align-items-center">
                        <a href="http://o2.pl" className="helper helper-contrast" onClick={(e) => toggleContrastVersion(e)}>
                            <FontAwesomeIcon icon={faEye} size="2x" />
                        </a>
                        <a href="//#endregion" className="helper helper-link" onClick={(e) => toggleUnderlineLinks(e)}>
                            <FontAwesomeIcon icon={faLink} size="2x" />
                        </a>
                        <a href="//#endregion" className="helper helper-text-size" name="minus"
                            onClick={(e) => changeFontSize(e)}>
                            <FontAwesomeIcon icon={faFont} size="3x" />
                            <FontAwesomeIcon icon={faMinus} size="2x" />
                        </a>
                        <a href="//#endregion" className="helper helper-text-size" name="plus"
                            onClick={(e) => changeFontSize(e)}>
                            <FontAwesomeIcon icon={faFont} size="3x" />
                            <FontAwesomeIcon icon={faPlus} size="2x" />
                        </a>
                        <a
                            href="https://ustron.bip.info.pl/dokument.php?iddok=83&idmp=30&r=o"
                            className="helper helper-bip"
                        >
                            <BipIcon className="link bip" />
                        </a>
                    </div>
                </div>
            )}
        </SiteInfoContextConsumer>
    )
}

export default MainMenu;