import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { main_url, museum_url } from "../../extra/main_menu";

const start_link = { label: "Start", href: main_url };

const getBreadCrumbs = (breadcrumbs) => {
	const result = breadcrumbs.map((item, index) => {

		if (index == breadcrumbs.length - 1)
			return {label: item.name};
		if (!item.url)
			return {label: item.name, to: '#'};
		if (item.url.includes(main_url))
			return {label: item.name, href: item.url};
		else if (item.url.includes(museum_url)) {
			if (item.name === museum_url)
				return {label: 'Muzeum Ustroński', to: item.url.split(museum_url)[1]};
			else
				return {label: item.name, to: item.url.split(museum_url)[1]};
		}

	})
	console.log(result);
	return result;
}

const Breadcrumbs = ({ breadcrumbs, extra_classes }) => {
	const result = getBreadCrumbs(breadcrumbs);
	return (
		<div className={`breadcrumbs ${ extra_classes || "" } mb-5` }>
			
			<div className="container">
				<div className="breadcrumbs__items">
					{ result && !!result.length && 
						result.map(({ label, href, to }, index) => (
							href 
							? <a key={ index } href={ href } > { label } </a>
							: to 
								? <Link key={ index } to={ to } > { label } </Link>
								:	<div key={ index } > { label } </div>	
					))}
				</div>
			</div>
		</div>
	);
};

Breadcrumbs.propTypes = { 
	breadcrumbs: PropTypes.array.isRequired,
	extra_classes: PropTypes.string
}

export default Breadcrumbs;