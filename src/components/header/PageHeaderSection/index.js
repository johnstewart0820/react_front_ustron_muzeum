import React from 'react';
import DefaultImage from "../../../img/loop/1.jpg";

const PageHeaderSection = ({extra_classes, thumbnail, children, noDefaultImage}) => (
    <div className={`page-header-section ${extra_classes || ""}`}>
        <div className="page-header-section__main">
            {children}
        </div>
        {(thumbnail || (!thumbnail && !noDefaultImage)) && (
            <div
                className="page-header-section__thumbnail thumbnail"
                style={{backgroundImage: `url("${thumbnail || DefaultImage}")`}}
            />
        )}
    </div>
);

export default PageHeaderSection;