import React, {useEffect, useState} from "react";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import Axios from "axios";
import Routing from "./routing/Routing";
import Footer from './components/footer';
import Header from "./components/header";
import Utils from "./utils/Locale";
import "./styles/layout.scss"

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
	return (
        <Router>
            <Header menuData = {headerData} languages = {languages}/>
            <main>
                <Routing />
            </main>
            <Footer data = {footerData}/>
        </Router>

    );
};
    

export default App;
