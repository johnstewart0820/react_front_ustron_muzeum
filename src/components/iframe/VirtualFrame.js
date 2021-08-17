import React from "react";
import PropTypes from 'prop-types';


const VirtualFrame = props => {
    const data = props.data;
    return (
        <div className="virtual-frame-container mb-5">
            <p>{data.field_virtualwalk_name}</p>
            <div dangerouslySetInnerHTML={{__html: data.field_virtualwalk_embed}} />
        </div>
    );
};

export default VirtualFrame;