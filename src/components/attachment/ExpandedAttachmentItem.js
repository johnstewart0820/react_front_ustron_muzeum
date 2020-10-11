import React from 'react';
import PropTypes from 'prop-types';


const ExpandedAttachmentItem = ({ name, title, active }) => (
	<div className={`expanded-attachment-item ${ active ? "active" : "" }`}>
		<div className="expanded-attachment-item__photo">
			<img src={ name } alt={ title }/>
		</div>
	</div>
)

ExpandedAttachmentItem.propTypes = {
	name: PropTypes.string.isRequired,
	title: PropTypes.string,
	active: PropTypes.bool.isRequired
}

export default ExpandedAttachmentItem;