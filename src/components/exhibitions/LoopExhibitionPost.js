import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import DefaultImage from "../../img/loop/1.jpg";
import {getArticleLink} from "../../extra/functions";
import PostEventDates from "../events/PostEventDates";
const fromTimeStampToDateObj = timestamp => ( new Date( timestamp * 1000 ));
const LoopExhibitionPost = props => {
	const event_dates = {
		start_date: props.event_start_date ? fromTimeStampToDateObj( props.event_start_date ) : null,
		end_date: props.event_end_date ? fromTimeStampToDateObj( props.event_end_date ) : null,
	};
	return (
	<Link to={getArticleLink(props)} className="loop-news-post mb-4">
		<div className="loop-news-post__thumbnail has-overlay thumbnail" style={{backgroundImage: `url("${props.image || DefaultImage}")`}}>
		</div>
		<div className="loop-news-post__category mt-4">{props.categories_labels.split(',')[props.categories_labels.split(',').length - 1]}</div>
		<div className="loop-news-post__content">
			<PostEventDates {...event_dates } />
			<div className="loop-news-post__title heading">{props.title}</div>
		</div>
	</Link>
	);
};

export default LoopExhibitionPost;
