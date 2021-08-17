import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import PageRenderer from "../extra/PageRenderer";
import NotFoundPage from "../pages/NotFoundPage";
import SiteInfoContext from "../constants/SiteInfoContext";

const Routing = () => {
    const context = React.useContext(SiteInfoContext);

    return (
        <Switch>
            {/* Routes for pages which controlled from CMS */}
            <Redirect exact from={'/'} to={'/' + context.active_language}/>
            <Route exact path={'/:locale'} component={PageRenderer}/>
            <Route exact path={'/:locale/:slug'} component={PageRenderer}/>
            <Route exact path={'/:locale/:slug/:id'} component={PageRenderer}/>
            {/* 404 page */}
            <Route component={NotFoundPage}/>
        </Switch>
    );
}

export default Routing;
