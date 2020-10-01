import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";

import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import ExhibitionPage from '../pages/Exhibition';
import EventPage from '../pages/Event';
import NewsPage from '../pages/News';
import ChroniclePage from '../pages/Chronicle';
import EducationPage from '../pages/Education';
import TourismPage from '../pages/Tourism';
import ArchivePage from '../pages/Archive';
import ContactPage from '../pages/Contact';
import Utils from "../utils/Locale";
const Routing = () => {
    const base = '/:locale(en|cz|de|pl)';
    return (
        <BrowserRouter>
            <Switch>
                {/* Routes for pages which controlled from CMS */}
                <Route exact path={base} component={HomePage}/>
                <Route path={`${base}/about`} component={AboutPage}/>
                <Route path={`${base}/exhibition`} component={ExhibitionPage}/>
                <Route path={`${base}/event`} component={EventPage}/>
                <Route path={`${base}/news`} component={NewsPage}/>
                <Route path={`${base}/chronicle`} component={ChroniclePage}/>
                <Route path={`${base}/education`} component={EducationPage}/>
                <Route path={`${base}/tourism`} component={TourismPage}/>
                <Route path={`${base}/archive`} component={ArchivePage}/>
                <Route path={`${base}/contact`} component={ContactPage}/>

                <Redirect exact from={'/'} to={`/${Utils.getLocale()}/`}/>

                {/* 404 page */}
                <Route component={NotFoundPage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routing;
