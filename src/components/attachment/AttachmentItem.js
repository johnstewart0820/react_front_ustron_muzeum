import React from 'react';
import PropTypes from 'prop-types';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AttachmentItem = ({ name, index, title, onClick }) => (
		<div className="attachment-item d-flex justify-content-center align-items-center">
			<div
				onClick={ () => onClick( index ) }
				className="thumbnail"  
			>
				<FontAwesomeIcon icon={faDownload} size="3x"/>
				<p className="download-description pt-4">{title}</p>
			</div>
		</div>
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