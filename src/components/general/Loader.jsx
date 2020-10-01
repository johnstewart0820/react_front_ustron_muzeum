import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ extra_classes, style }) => (
	<div className={` loader ${ extra_classes || "" }`} style={ style }>
		<div className="cssload-whirlpool"/>
	</div>
)

Loader.propTypes = {
	style: PropTypes.object
}

export default Loader;