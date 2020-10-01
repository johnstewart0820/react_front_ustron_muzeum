import React, {useEffect, useState} from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Axios from "axios";

import Footer from './components/footer';
import Header from "./components/header";

import NotFoundPage from "./pages/NotFoundPage";
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ExhibitionPage from './pages/Exhibition';
import EventPage from './pages/Event';
import NewsPage from './pages/News';
import ChroniclePage from './pages/Chronicle';
import EducationPage from './pages/Education';
import TourismPage from './pages/Tourism';
import ArchivePage from './pages/Archive';
import ContactPage from './pages/Contact';
import Utils from "./utils/Locale";
import "./styles/layout.scss"

const browserHistory = createBrowserHistory();
const base = '/:locale(en|cz|de|pl)';
const App = () => {
    const [footerData, setFooterData] = useState({});
    const [headerData, setHeaderData] = useState([]);
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        Axios.get("http://api.ustron.s3.netcore.pl/sites/getInfo?domain=muzeum.ustron.s3.netcore.pl")
        .then((response) => {
          let footer_address = response.data.info.template.layout['home-page'].widgets['footer-contact'].elements[0].content;
          let footer_hours = response.data.info.template.layout['home-page'].widgets['footer-hours'].elements[0].content;
          let footer_links = response.data.info.template.layout['home-page'].widgets['footer-links-1'].elements[0].content;
          let top_menu_data = response.data.info.template.layout['home-page'].widgets['top-menu'].elements[0].menu.structure;
          let languages = response.data.info.languages.split(",");
          setHeaderData(top_menu_data);
          setLanguages(languages);
          setFooterData({footer_address, footer_hours, footer_links});
        });
    }, [])
    const getRoute = (data) => {
        let route = "";
        if (data.item.article) {
          // article
          route = `${data.item.article.slug.replaceAll(' ', '')},${data.item.article.id}`
          console.log(route);
          return route;
        }
      
        else if ( !data.item.subitems && (!data.subitems || data.subitems.length == 0)) {
          // category
          route = `${data.item.name.replaceAll(' ', '')},${data.item.id}`
          console.log(route);
          return route;
        }
    };
	return (
        <BrowserRouter history={browserHistory}>
            <Header menuData = {headerData} languages = {languages}/>
            <main>
            <Switch>
                {/* Routes for pages which controlled from CMS */}
                <Route exact path={base} component={HomePage}/>
                {headerData.map((route) => (
                    <Route key={route} path={`${base}/${getRoute(route)}`} component={ContactPage}/>
                ))}
                {headerData.map((route) => (
                    route.subitems.map((item) => (
                        <Route key={item} path={`${base}/${getRoute(item)}`} component={AboutPage}/>
                    ))
                ))}

                <Redirect exact from={'/'} to={`/${Utils.getLocale()}/`}/>

                {/* 404 page */}
                <Route component={NotFoundPage}/>
            </Switch>
            </main>
            <Footer data = {footerData}/>
        </BrowserRouter>

    );
};
    

export default App;
