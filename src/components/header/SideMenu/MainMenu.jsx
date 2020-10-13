import React, { useState } from 'react';
import { SiteInfoContextConsumer } from "../../../constants/SiteInfoContext";
import { Link } from "react-router-dom";

const MainMenu = () => {
    
    const [ open_menu, setOpenMenu ] = useState( null );
    
    function toggleMobileMenu ( e, index ) {
        e.preventDefault();
        setOpenMenu( open_menu === index ? -1 : index );
    }
    
    return (
        <SiteInfoContextConsumer>
            { ({ header_menu }) => (
                <div className="main-menu">
                    
                    { header_menu.map(( { item, subitems }, index ) => {
                        console.log(item, subitems);
                        const column_classes = [ "main-menu__column", open_menu === index ? "mobile-open" : "" ];
                        
                        return (
                            <div key={ index } className={ column_classes.join(" ") } >
                                <Link to={ item.path } className="main-menu__title" rel={'noopener noreferrer'}>
                                    
                                    { subitems && !!subitems.length && <strong onClick={ e => toggleMobileMenu( e, index ) }> &#62; </strong> }
                                    { (!subitems || !subitems.length) ? <span className="sidebar-nochildren-span"> { item.label } </span> : <span onClick={ e => toggleMobileMenu( e, index )}> { item.label } </span> }
                                    
                                </Link>
                                
                                { subitems && !!subitems.length &&
                                <div className="main-menu__items">
                                    { subitems.map(({ label, path}, index) => (
                                        <Link key={ index } to={ path } rel={'noopener noreferrer'}> { label } </Link>
                                    )) }
                                </div>
                                }
                            </div>
                        )
                    }) }
                </div>
            )}
        </SiteInfoContextConsumer>
    )
}

export default MainMenu;