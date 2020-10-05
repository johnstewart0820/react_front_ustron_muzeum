import React, { useState, useEffect } from "react";
import moment from "moment";
import { withRouter } from "react-router-dom";
import MainHeaderSection from "../../components/header/MainHeaderSection";
import Breadcrumbs from "../../components/general/Breadcrumbs";
import {API} from "../../extra/API";
import {DayCarousel} from "../../components/events/DayCarousel";
import Loader from "../../components/general/Loader";
import Carousel from "../../components/carousel/Carousel";
import LoopEventsPost from "../../components/events/LoopEventsPost";

const dateOrDate = (firstDate, secondDate) => {
    if (!firstDate && !secondDate)
        return null;

    return moment(firstDate || secondDate).format('DD.MM.YYYY');
};

const Event = (props) => {
    const acf = props.page.acf;
    const {history} = props;
    const [selectedDate, setSelectedDate] = React.useState(moment());
    const [data, setData] = React.useState(null);
    const [filterArgs, setFilterArgs] = React.useState({});
    React.useEffect(() => {
        console.log(selectedDate);
        setData(null);
        API.getByConfig(acf.field_nearest_events_museum_categories, {
            ...filterArgs,
            date: dateOrDate(selectedDate, filterArgs.date),
            date_to: dateOrDate(selectedDate, filterArgs.date_to),
        }).then(res => {
            setData(res.data);
        }).catch(err => {
            console.error(err);
            setData(false);
        });
    }, [filterArgs, selectedDate]);

    return (
        <>
            <MainHeaderSection extra_classes="subpage">
                <Breadcrumbs breadcrumbs={[{label: "Muzeum Ustroński", to: "/"}, {label: "Wydarzenia"}]}/>
            </MainHeaderSection>
            <DayCarousel
                startDate={moment().subtract(3, 'days')}
                selectedDate={selectedDate}
                onDayClick={date => setSelectedDate(date)}
                amount={7}
            />
            {data === null && <Loader/>}
            {!!data?.contents && (
                <Carousel
                    heading={'WYBRANA DATA'}
                    selectedDate={selectedDate}
                    containerStyles={{paddingLeft: '90px', backgroundColor: '#324655'}}
                    bodyStyles={{display: 'flex'}}
                    items={data.contents}
                    ItemComponent={LoopEventsPost}
                />
            )}
        </>
    );
}

export default withRouter(Event);
