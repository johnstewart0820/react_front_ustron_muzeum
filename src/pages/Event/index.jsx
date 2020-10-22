import React, { useState, useEffect } from "react";
import moment from "moment";
import { withRouter } from "react-router-dom";
import MainHeaderSection from "../../components/header/MainHeaderSection";
import Breadcrumbs from "../../components/general/Breadcrumbs";
import {API} from "../../extra/API";
import {DayCarousel} from "../../components/events/DayCarousel";
import Loader from "../../components/general/Loader";
import EventCarousel from "../../components/carousel/EventCarousel";
import LoopEventsPost from "../../components/events/LoopEventsPost";
import { MonthCarousel } from "../../components/events/MonthCarousel";

const dateOrDate = (firstDate, secondDate) => {
    if (!firstDate && !secondDate)
        return null;

    return moment(firstDate || secondDate).format('DD.MM.YYYY');
};

const Event = (props) => {
    const acf = props.page.acf;
    const breadcrumb = props.page.breadcrumb;
    const {history} = props;
    const [selectedDate, setSelectedDate] = React.useState();
    const [startDate, setStartDate] = React.useState(moment());
    const [data, setData] = React.useState(null);
    const [day_data, setDayData] = React.useState(null);
    const [filterArgs, setFilterArgs] = React.useState({});
    const [signSelected, setSignSelected] = React.useState(false);
    React.useEffect(() => {
        // setStartDate(selectedDate);
        setData(null);
        API.getByConfig(acf.field_nearest_events_museum_categories, {
            ...filterArgs,
            date: dateOrDate(selectedDate, filterArgs.date),
            date_to: dateOrDate(selectedDate, filterArgs.date_to),
        }).then(res => {
            setData(res.data);
            setSignSelected(true);
        }).catch(err => {
            console.error(err);
            setData(false);
        });
    }, [filterArgs, selectedDate]);
    React.useEffect(() => {
        // setStartDate(selectedDate);
        setData(null);
        API.getByConfig(acf.field_nearest_events_museum_categories, {
            ...filterArgs,
            date: moment().format('DD.MM.YYYY'),
            date_to: moment().format('DD.MM.YYYY'),
        }).then(res => {
            console.log(res.data.contents);
            if (res.data.contents.length === 0)
            {
                
                API.getByConfig(acf.field_nearest_events_museum_categories, {
                    ...filterArgs,
                    date: moment().format('DD.MM.YYYY'),
                    date_to: moment().add(90, 'days').format('DD.MM.YYYY')
                }).then(res => {
                    setData(res.data);               
                    setSignSelected(false);
                }).catch(err => {
                    console.error(err);
                    setData(false);
                });
            } else {
                setData(res.data);
                setSignSelected(true);
                setSelectedDate(moment());
            }
        }).catch(err => {
            console.error(err);
            setData(false);
        });
    }, []);
    const handleNextMonth = (month) => {
        API.getByConfig(acf.field_nearest_events_museum_categories, {
            ...filterArgs,
            date: dateOrDate(month, filterArgs.date),
            date_to: moment(month).add(7, 'days').format('DD.MM.YYYY')
        }).then(res => {
            setDayData(res.data.contents);
            setStartDate(moment(month)); 
        }).catch(err => {
            console.error(err);
            setData(false);
        });
    }
    const handlePrevMonth = (month) => {
         API.getByConfig(acf.field_nearest_events_museum_categories, {
            ...filterArgs,
            date: dateOrDate(month, filterArgs.date),
            date_to: moment(month).add(7, 'days').format('DD.MM.YYYY')
        }).then(res => {
            setDayData(res.data.contents);
            setStartDate(moment(month));
        }).catch(err => {
            console.error(err);
            setData(false);
        });
    }
    return (
        <>
            <MainHeaderSection extra_classes="subpage">
                <Breadcrumbs breadcrumbs={breadcrumb}/>
            </MainHeaderSection>
            <MonthCarousel startDate={moment()} handleNextMonth={handleNextMonth} handlePrevMonth={handlePrevMonth}/>
            <DayCarousel
                startDate={startDate}
                selectedDate={selectedDate}
                onDayClick={date => setSelectedDate(date)}
                amount={7}
                day_data = {day_data}
                handleNextDay={handleNextMonth}
                handlePrevDay={handlePrevMonth}
            />
            {data === null && <Loader/>}
            {!!data?.contents && (
                <EventCarousel
                    heading={signSelected ? 'WYBRANA DATA' : 'NAJBLIŻSZE WYDARZENIA'}
                    selectedDate={selectedDate}
                    containerStyles={{paddingLeft: '90px', backgroundColor: '#324655'}}
                    bodyStyles={{display: 'flex'}}
                    items={data.contents}
                    ItemComponent={LoopEventsPost}
                    signSelected = {signSelected}
                />
            )}
        </>
    );
}

export default withRouter(Event);
