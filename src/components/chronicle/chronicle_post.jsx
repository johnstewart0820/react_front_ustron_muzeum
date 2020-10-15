import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';

const ChroniclePost = (props) => {
    const chronicle = props.data;
    return (
        <>
        <article className="section single-item-page mb-5">
            <div className="container">
            <div className="row">
                <div className="col-12">
                {chronicle && chronicle.title  && <h3>{chronicle.title}</h3>}
                </div>
                <div className="row">
                <div className="col-12 col-md-4">
                    {chronicle && chronicle.title && <img src={chronicle.image} alt="" className="img-fluid" />}
                </div>
                <div className="col-12 col-md-8 chronicle-post">
                    <div dangerouslySetInnerHTML={{__html: chronicle && chronicle.body}}></div>
                </div>
                </div>
            </div>
            </div>
        </article>
        </>
    );
};

ChroniclePost.propTypes = {
	data: PropTypes.object
}
export default withRouter(ChroniclePost);