import React from 'react';
import PropTypes from 'prop-types';

import { isFunction } from "../../extra/functions";
import Angle from "../../svg/components/Angle";

const arrowClick = ( e, action, callback ) => {
	e.preventDefault();
	if ( isFunction( callback )) callback( action );
}

const Arrows = ({ extra_classes, onClick }) => (
	<div className={`arrows ${ extra_classes || "" }`}>
		{ 
			[ "prev", "next" ].map( action => (
				<button key={action} onClick={ e => arrowClick( e, action, onClick )}>
					<Angle direction={ action === "prev" ?  "left" : "" } />
					<span className="d-none"> arrow </span>
				</button>
			))
		}
	</div>
)

Arrows.propTypes = {
	extra_classes: PropTypes.string,
	onClick: PropTypes.func
}

export default Arrows;