import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Loader from "../../components/general/Loader";
import HomeSlider from "../../components/main/HomeSlider";
import ObjectInfo from "../../components/main/object-info";
import AboutInfo from "../../components/main/AboutInfo";
import Shortcuts from "../../components/main/Shortcuts";
import Chronicle from "../../components/main/Chronicle";
import EducationSection from "../../components/main/EducationSection";
import EventCarouselEducation from "../../components/carousel/EventCarouselEducation";
import EventCarouselExhibition from "../../components/carousel/EventCarouselExhibition";
import EventCarouselEvents from "../../components/carousel/EventCarouselEvents";
import LoopEventsPostEducation from "../../components/events/LoopEventsPostEducation";
import LoopEventsPost from "../../components/events/LoopEventsPost";
import {API} from "../../extra/API";

const Home = (props) => {
    const data = props.page.acf;
    const [education_data, setEducationData] = React.useState(null);
    const [temporary_data, setTemporaryData] = React.useState(null);
    const [permanent_data, setPermanentData] = React.useState(null);
    const [event_data, setEventData] = React.useState(null);
    const [news_data, setNewsData] = React.useState(null);
    React.useEffect(() => {
        // setStartDate(selectedDate);
        setEducationData(null);
        console.log(props.page.acf.field_education_category);
        const categories = [props.page.acf.field_education_category.id];
        API.getEvents({categories: categories}).then(res => {
            setEducationData(res.data);
        }).catch(err => {
            console.error(err);
            setEducationData(false);
        });
        const temp_categories = props.page.acf.field_temporary_exhibition_category.map((item, key) => (item.id));
        API.getPosts({categories: temp_categories, limit: props.page.acf.field_temporary_exhibition_posts_count})
        .then(res => {
            setTemporaryData(res.data.contents);
        })
        .catch(e => {
            setTemporaryData(false);
        });
        const permanent_categories = props.page.acf.field_permanent_exhibition_category.map((item, key) => (item.id));
        API.getPosts({categories: permanent_categories, limit: props.page.acf.field_permanent_exhibition_posts_count})
        .then(res => {
            setPermanentData(res.data.contents);
        })
        .catch(e => {
            setPermanentData(false);
        });
        const event_category = props.page.acf.field_information_modules_museum[0].field_section_categories_museum.map((item, key) => (item.id));
        API.getEvents({categories: event_category, limit: props.page.acf.field_information_modules_museum[0].field_section_posts_count_museum})
        .then(res => {
            setEventData(res.data.contents);
        })
        .catch(e => {
            setEventData(false);
        });
        const news_category = props.page.acf.field_information_modules_museum[1].field_section_categories_museum.map((item, key) => (item.id));
        API.getEvents({categories: news_category, limit: props.page.acf.field_information_modules_museum[1].field_section_posts_count_museum})
        .then(res => {
            setNewsData(res.data.contents);
        })
        .catch(e => {
            setNewsData(false);
        });
        
    }, []);
    return (
        <>
            {!data && <Loader/>}
            {!!data &&
                <div className="homepage-container">
                    <HomeSlider slider_status={data.field_should_override_slider} data={data.field_override_slides} height="700"/>
                    <ObjectInfo data={data} />
                    <AboutInfo data={data} />
                    {!!temporary_data && !!permanent_data && (
                        <EventCarouselExhibition
                            sub_heading="Ostatnio w Muzeum Ustroński"
                            arrow_show={false}
                            heading={data.field_temporary_exhibition_title}
                            containerStyles={{backgroundColor: '#324655'}}
                            bodyStyles={{display: 'flex'}}
                            temporary_data={temporary_data}
                            permanent_data={permanent_data}
                            ItemComponent={LoopEventsPostEducation}
                            extra_classes="carousel-exhibition"
                        />
                    )}
                    {(!!event_data && !!news_data) && (
                        <EventCarouselEvents
                            sub_heading="Ostatnio w Muzeum Ustroński"
                            arrow_show={false}
                            heading_1={data.field_information_modules_museum[0].field_section_title_museum}
                            heading_2={data.field_information_modules_museum[1].field_section_title_museum}
                            containerStyles={{backgroundColor: 'white'}}
                            bodyStyles={{display: 'flex'}}
                            event_data={event_data}
                            news_data={news_data}
                            ItemComponent={LoopEventsPost}
                            extra_classes="carousel-events"
                        />
                    )}
                    <Shortcuts data={data} />
                    <Chronicle data={data} />
                    {!!education_data?.contents && (
                        <EventCarouselEducation
                            sub_heading="Ostatnio w Muzeum Ustroński"
                            arrow_show={false}
                            heading={data.field_education_title}
                            containerStyles={{backgroundColor: '#324655'}}
                            bodyStyles={{display: 'flex'}}
                            items={education_data.contents}
                            ItemComponent={LoopEventsPostEducation}
                            extra_classes="carousel-education"
                        />
                    )}
                </div>
            }
        </>
    );
}

export default withRouter(Home);
