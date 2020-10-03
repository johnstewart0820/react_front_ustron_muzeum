import React, {useEffect, useState} from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { SiteInfoContextProvider } from "./constants/SiteInfoContext";
import Axios from "axios";

import Footer from './components/footer';
import Header from "./components/header";
import Routing from "./routing/Routing";
import PageList from "./constants/PageList";

import "./styles/layout.scss";

const browserHistory = createBrowserHistory();
const App = () => {
	return (
        <BrowserRouter history={browserHistory}>
            <SiteInfoContextProvider>            
                <Header/>
                <main>
                    <Routing />
                </main>
                <Footer/>
            </SiteInfoContextProvider>
        </BrowserRouter> 
    );
};
    

export default App;
