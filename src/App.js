import React, {useEffect, useState} from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { SiteInfoContextProvider } from "./constants/SiteInfoContext";
import Axios from "axios";

import Footer from './components/footer';
import Header from "./components/header";
import Routing from "./routing/Routing";
import PageList from "./constants/PageList";
import ScrollToTop from "./extra/ScrollToTop";
import ErrorHandler from "./extra/ErrorHandler";
import "./styles/layout.scss";

const browserHistory = createBrowserHistory();
const App = () => {
	return (
        <BrowserRouter history={browserHistory}>
            <SiteInfoContextProvider>      
                <ScrollToTop>      
                    <Header/>
                    <main>
                        <ErrorHandler>
                            <Routing />
                        </ErrorHandler>
                    </main>
                    <Footer/>
                </ScrollToTop>
            </SiteInfoContextProvider>
        </BrowserRouter> 
    );
};
    

export default App;
