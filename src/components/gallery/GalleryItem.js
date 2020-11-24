import React from 'react';
import PropTypes from 'prop-types';

const GalleryItem = ({ name, index, title, onClick, description, thumb }) => (
	name ?
	( 
		<div className="gallery-item">
			<img
				onClick={ () => onClick( index ) }
				className="thumbnail mb-4"  
				src={ thumb } 
			/>
		</div>
	)
	: null
)

// GalleryItem.propTypes = { 
// 	name: PropTypes.string.isRequired,
// 	index: PropTypes.number.isRequired, 
// 	title: PropTypes.string,
// 	onClick: PropTypes.func.isRequired,
// 	thumb: PropTypes.string,
// 	description: PropTypes.string
// }

export default GalleryItem;