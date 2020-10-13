import React from 'react';
import EventDates from "./EventDates";
import DefaultImage from "../../img/loop/1.jpg";
const fromTimeStampToDateObj = timestamp => ( new Date( timestamp * 1000 ));

const EventSingleHead = (props) => {
    const event_dates = {
		start_date: props.event_start_date ? fromTimeStampToDateObj( props.event_start_date ) : null,
		end_date: props.event_end_date ? fromTimeStampToDateObj( props.event_end_date ) : null,
	};
    return (
        <section className="container section news-single-section">
            <div className="row col-md-12">
                <div className="col-md-4">
                    <img src={props.image.length > 0 ? props.image : DefaultImage} className="news-single-img"/>
                </div>
                <div className="col-md-8">
                    <p className="news-single-categories-label">
                        {props.categories_labels}
                    </p>
                    <p className="news-single-categories-title">
                        {props.title}
                    </p>
                    <EventDates {...event_dates}/>
                    <div className="news-single-body" dangerouslySetInnerHTML={{__html: props.body}}></div>
                </div>
            </div>
        </section>
    );
}

export default EventSingleHead;