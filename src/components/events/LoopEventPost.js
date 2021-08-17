import React from 'react';
import { Link } from "react-router-dom";
import DefaultImage from "../../img/loop/1.jpg";
import {getArticleLink} from "../../extra/functions";

const LoopEventPost = props => (
	<Link to={getArticleLink(props)} className="loop-news-post">
		<div className="loop-news-post__thumbnail has-overlay thumbnail" style={{backgroundImage: `url("${props.image || DefaultImage}")`}}>
		</div>

		<div className="loop-news-post__content">
			<div className="loop-news-post__category">{props.categories_labels.split(',')[props.categories_labels.split(',').length - 1]}</div>
			<div className="loop-news-post__title heading">{props.title}</div>
			<div className="loop-news-post__desc" dangerouslySetInnerHTML={{__html: props.short}} />
		</div>
	</Link>
);

export default LoopEventPost;
