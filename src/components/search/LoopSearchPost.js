import React from 'react';
import { Link } from "react-router-dom";
import DefaultImage from "../../img/loop/1.jpg";
import {getArticleLink} from "../../extra/functions";

const LoopSearchPost = props => (
	<Link to={getArticleLink(props)} className="loop-search-post">
		<div className="loop-search-post__thumbnail has-overlay thumbnail" style={{backgroundImage: `url("${props.image || DefaultImage}")`}}>
		</div>

		<div className="loop-search-post__content">
			<div className="loop-search-post__category">{props.categories_labels.split(',')[props.categories_labels.split(',').length - 1]}</div>
			<div className="loop-search-post__title heading">{props.title}</div>
			<div className="loop-search-post__desc" dangerouslySetInnerHTML={{__html: props.short}} />
		</div>
	</Link>
);

export default LoopSearchPost;
