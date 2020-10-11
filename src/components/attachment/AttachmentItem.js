import React from 'react';
import PropTypes from 'prop-types';

const AttachmentItem = ({ name, index, title, onClick }) => (
	name ?
	( 
		<div className="attachment-item">
			<div
				onClick={ () => onClick( index ) }
				className="thumbnail mb-4"  
				style={{ backgroundImage: `url(${ name })` }} 
			/>
		</div>
	)
	: null
)

// AttachmentItem.propTypes = { 
// 	name: PropTypes.string.isRequired,
// 	index: PropTypes.number.isRequired, 
// 	title: PropTypes.string,
// 	onClick: PropTypes.func.isRequired,
// 	thumb: PropTypes.string,
// 	description: PropTypes.string
// }

export default AttachmentItem;