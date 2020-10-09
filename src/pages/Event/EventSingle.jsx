import React, {useState, useEffect} from 'react';
import moment from "moment";
import MainHeaderSection from "../../components/header/MainHeaderSection";
import OneCarouseInRow from "../../components/carousel/OneCarouseInRow";
import Breadcrumbs from "../../components/general/Breadcrumbs";
import EventSingleHead from "../../components/events/EventSingleHead";
import LoopEventPost from "../../components/events/LoopEventPost";
import {API} from "../../extra/API";
const dateOrDate = (firstDate, secondDate) => {
    if (!firstDate && !secondDate)
        return null;

    return moment(firstDate || secondDate).format('DD.MM.YYYY');
};

export default function EventSinglePage(props) {
    const [events, setEvents] = React.useState(null);
    const [filterArgs, setFilterArgs] = React.useState({});
    const acf = props.page.acf;
    console.log(props.page.categories);
    React.useEffect(() => {
        API.getEntities({categories: props.page.categories, 
            date: dateOrDate('01.01.2020', filterArgs.date),
            date_to: dateOrDate('31.12.2020', filterArgs.date_to),
        }).then(res => {
            setEvents(res.data.contents);
        }).catch(err => {
            console.error(err);
            setEvents(false);
        });
    }, []);

    return (
        <>
            <MainHeaderSection extra_classes="single">
                <Breadcrumbs breadcrumbs={[]}/>
            </MainHeaderSection>
            <EventSingleHead {...props.page}/>

            {events !== false && (
                <OneCarouseInRow carousel={{
                    loading: events === null,
                    heading: 'Ostatnie aktualności',
                    ItemComponent: LoopEventPost,
                    items: events || [],
                }}/>
            )}
        </>
    );
};