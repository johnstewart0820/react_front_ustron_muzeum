import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import Loader from "../../components/general/Loader";

import EducationVideos from "../../components/education/education_videos";
import LessonSocialMedia from "../../components/education/lesson_social_media";
import MainHeaderSection from "../../components/header/MainHeaderSection";
import Breadcrumbs from "../../components/general/Breadcrumbs";
import {API} from "../../extra/API";
import EventCarouselEducation from "../../components/carousel/EventCarouselEducation";
import LoopEventsPostEducation from "../../components/events/LoopEventsPostEducation";

const EducationLesson = (props) => {
    const breadcrumb = props.page.breadcrumb;
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        // setStartDate(selectedDate);
        setData(null);
        const categories = props.page.acf.field_museum_lessons_categories.map((item, index) => {return item.id})
        API.getEvents({categories: categories}).then(res => {
            setData(res.data);
        }).catch(err => {
            console.error(err);
            setData(false);
        });
    }, []);
    return (
            <>
                <MainHeaderSection extra_classes="subpage">
                    <Breadcrumbs breadcrumbs={breadcrumb}/>
                </MainHeaderSection>
                <div className="section container">
                    <h3>{props.page.acf.field_museum_lessons_title}</h3>
                </div>
                {data === null && <Loader/>}
                {!!data?.contents && (
                    <EventCarouselEducation
                        containerStyles={{paddingLeft: '90px', backgroundColor: '#324655'}}
                        bodyStyles={{display: 'flex'}}
                        items={data.contents}
                        ItemComponent={LoopEventsPostEducation}
                    />
                )}
                <LessonSocialMedia data={props.page.acf}></LessonSocialMedia>
            </>
    );
}

export default withRouter(EducationLesson);
