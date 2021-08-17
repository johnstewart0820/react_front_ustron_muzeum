import React from 'react';
import { Link } from "react-router-dom";

import EventDatesEducation from "./EventDatesEducation";
import DefaultImage from "../../img/loop/1.jpg";
import {getArticleLink} from "../../extra/functions";

const fromTimeStampToDateObj = timestamp => ( new Date( timestamp * 1000 ));

export default function LoopEventsPostEducation (props) {
	const {image, title, categories_labels, event_start_date, event_end_date} = props;

	const event_dates = {
		start_date: event_start_date ? fromTimeStampToDateObj( event_start_date ) : null,
		end_date: event_end_date ? fromTimeStampToDateObj( event_end_date ) : null,
	};

	return (
		<Link to={getArticleLink(props)} className="loop-event-post">
			<div className="loop-event-post__thumbnail has-overlay thumbnail" style={{ backgroundImage: `url("${image || DefaultImage}")` }}>
			</div>

			<div className="loop-event-post__content_education">
				<div className="loop-event-post__title_education heading">{title}</div>
				<div className="loop-event-post__label_education heading">{categories_labels}</div>
				<EventDatesEducation {...event_dates } />
			</div>
		</Link>
	);
}
