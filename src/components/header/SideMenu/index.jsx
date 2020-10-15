import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import MainMenu from "./MainMenu";
import { ListIcon } from "../../../svg/icons";

class Sidebar extends Component {
    
    static propTypes = { }
    
    state = {
        menu_open: false,
    }
    
    
    toggleMainMenu = (e) => {
        e.preventDefault();
        this.setState({ menu_open: !this.state.menu_open })
    }
    
    
    render(){
        
        return (
            <div className="sidebar">
                <button type="button" className={`sidebar__trigger ${ this.state.menu_open ? "active" : "" }`} onClick={ this.toggleMainMenu }>
                    <span className="d-none"> trigger </span>
                    <ListIcon />
                </button>
                
                { this.state.menu_open &&
                <MainMenu onNavigate={this.toggleMainMenu}/>
                }
            </div>
        )
    }
}

export default withRouter(Sidebar);