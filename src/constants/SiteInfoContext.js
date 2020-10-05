import React, { Component } from 'react';
import { API } from "../extra/API";

import { SITE, SITES_DOMAIN } from "../extra/site_settings";
import { isContrastThemeOn, turnOnContrastTheme } from "../extra/theme";
import FullPageLoader from '../components/general/FullPageLoader';
import LocalStorage from "./LocalStorage";

import moment from 'moment';
import 'moment/locale/pl';
import 'moment/locale/cs';
import 'moment/locale/de';
import {getArticleLink} from "../extra/functions";

const SiteInfoContext = React.createContext(null);
const SiteInfoContextConsumer = SiteInfoContext.Consumer;

const StoredLocale = localStorage.getItem(LocalStorage.Locale);

class SiteInfoContextProvider extends Component{
	state = {
		site_info_loading: true,
		active_language: StoredLocale || 'pl',
	};

	componentDidMount () {
		if (!StoredLocale)
			localStorage.setItem(LocalStorage.Locale, this.state.active_language);
		moment.locale(this.state.active_language);
		this.checkTheme();
		this.getSiteInfo();
	}


	checkTheme = () => { if ( isContrastThemeOn ) turnOnContrastTheme(); }


	getSiteInfo = () => {

		this.setState({ site_info_loading: true });
		
		const { active_language } = this.state;
		

		API.get(`sites/getInfo?domain=${ SITES_DOMAIN[ SITE ] }`)
		.then( res => {

			const { info } = res.data;
			// console.log( info );

			const languages = 
				info.languages && info.languages !== active_language  
					? info.languages.split(",") 
					: [];

			const widgets = info?.template?.layout?.["home-page"]?.widgets;
			// console.log( widgets );
			
			const header_menu_structure = widgets?.["top-menu"]?.elements?.[0]?.menu?.structure || [];
			const footer_address = widgets?.["footer-contact"]?.elements?.[0]?.content;
			const footer_hours = widgets?.["footer-hours"]?.elements?.[0]?.content;
			const footer_links = widgets?.["footer-links-1"]?.elements?.[0]?.content;
			const header_menu = [];
			for (let i in header_menu_structure) {
				const main_item_data = header_menu_structure[i].item;
				const main_item = {label: main_item_data.name, path: (main_item_data.article ? getArticleLink(main_item_data.article) : main_item_data.url) || "#" };
				const sub_item_list = [];
				const sub_item_list_data = header_menu_structure[i].subitems;
				
				for (let j in sub_item_list_data) {
					const sub_item_data = sub_item_list_data[j].item;
					const sub_item = {label: sub_item_data.name, path: (sub_item_data.article ? getArticleLink(sub_item_data.article) : sub_item_data.url) || "#" };
					sub_item_list.push(sub_item);
				}
				header_menu.push({item: main_item, subitems: sub_item_list});
			}

			this.setState({ 	
				site_info: info, 
				site_info_loading: false, 
				languages, 
				header_menu, 
				footer_address, 
				footer_hours,
				footer_links,
			})
		})
		.catch( err => {} )
	}


	changeLanguage = language => {
		localStorage.setItem(LocalStorage.Locale, language);
		moment.locale(language);
		this.setState({active_language: language}, this.getSiteInfo);
	};


	render(){

		const { children } = this.props;

		return(
			<SiteInfoContext.Provider value={{
				...this.state,
				changeLanguage: this.changeLanguage	
			}} >
				<FullPageLoader>
					{ children }
				</FullPageLoader>
			</SiteInfoContext.Provider>
		)
	}
};


export default SiteInfoContext;
export { SiteInfoContextProvider, SiteInfoContextConsumer };