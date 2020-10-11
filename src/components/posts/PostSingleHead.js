import React from 'react';
import DefaultImage from '../../img/loop/1.jpg';
const PostSingleHead = (props) => {
    const data = props.data;
    return (
    <div className="post-container mb-5">
        <section className="container section">
            <div className="row mb-5 post-home-section">
                <div className="col-md-4">
                    <small>Turystyka industrialna</small>
                    <h3 className="padding-title mt-5">{data.title}</h3>
                </div>
                <div className="col-md-8">
                <p>{data.short}</p>
                </div>
            </div>
        </section>
        
        <img src={data.original_image.length > 0 ? data.original_image : DefaultImage} className="posts-single-img" width="100%"/>
        <section className="container section mt-4 pt-4">
            <div className="row">
                <div className="col-md-4">
                </div>
                <div className="col-md-8">
                    <div className="main-home-desc" dangerouslySetInnerHTML={{__html: data.body}}/>
                </div>
            </div>
        </section>
    </div>
    );
}

export default PostSingleHead;