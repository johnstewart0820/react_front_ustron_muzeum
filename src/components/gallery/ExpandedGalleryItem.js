import React from 'react';
import PropTypes from 'prop-types';


const ExpandedGalleryItem = ({ name, thumb, title, active }) => (
	<div className={`expanded-gallery-item ${ active ? "active" : "" }`}>
		<div className="expanded-gallery-item__photo">
			<img src={ name } alt={ title }/>
		</div>
	</div>
)

ExpandedGalleryItem.propTypes = {
	thumb: PropTypes.string.isRequired,
	title: PropTypes.string,
	active: PropTypes.bool.isRequired
}

export default ExpandedGalleryItem;