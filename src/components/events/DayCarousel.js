import React from "react";
import DayButton from "../StadiumReservationComponents/DayButton";
import PropTypes from 'prop-types';
import moment from "moment";
import Arrows from "../buttons/Arrows";
import { getAllFromDateObject } from "../../extra/date";

export const DayCarousel = props => {
    const [startDate, setStartDate] = React.useState(moment(props.startDate));
    const [carouselDates, setCarouselDates] = React.useState([]);
    const [selectedDate, setSelectedDate] = React.useState(null);

    React.useEffect(() => {
        setSelectedDate(props.selectedDate ? moment(props.selectedDate) : null);
    }, [moment(props.selectedDate).format('DD.MM.YYYY')]);
    React.useEffect(() => {
        setStartDate(props.startDate ? moment(props.startDate) : null);
    }, [moment(props.startDate).format('DD.MM.YYYY')]);

    React.useEffect(() => {
        const dates = [];

        const cycleDate = moment(props.startDate);
        const endDate = moment(props.startDate).add(props.amount, props.type || 'days');
        let sign;
        for (cycleDate; cycleDate.isSameOrBefore(endDate); cycleDate.add(1, 'day')) {
            sign = false;
            const clone = cycleDate.clone();
            if (props.day_data ) {
                for (let i = 0; i < props.day_data.length; i ++) {
                    let date = new Date(props.day_data[i].event_start_date * 1000);
                    if (cycleDate.year() === date.getFullYear() &&
                        cycleDate.month() === date.getMonth() &&
                        cycleDate.date() === date.getDate()) {
                            sign = true; 
                        }
                }
            }
            if (sign === true)
                dates.push({
                    key: cycleDate.format('DD.MM.YYYY'),
                    active: !!props.selectedDate?.isSame(cycleDate),
                    onClick: () => {
                        setSelectedDate(clone);
                        props.onDayClick && props.onDayClick(clone);
                    },
                    dayName: cycleDate.format('dddd').toUpperCase(),
                    monthName: cycleDate.format('MMMM').toUpperCase(),
                    date: cycleDate.date(),
                    sign: sign
                });
            else 
                dates.push({
                    key: cycleDate.format('DD.MM.YYYY'),
                    active: !!props.selectedDate?.isSame(cycleDate),
                    dayName: cycleDate.format('dddd').toUpperCase(),
                    monthName: cycleDate.format('MMMM').toUpperCase(),
                    date: cycleDate.date(),
                    sign: sign
                });
            
        }
        setCarouselDates(dates);
    }, [props.day_data, props.startDate]);

    const onArrowClick = action => {props.handlePrevDay(props.startDate.clone()[action === 'prev' ? 'subtract' : 'add'](props.amount, props.type || 'days'))};

    return (
        <div className="day-button-container container">
            <div className="day-button-carousel">
                <div className="day-button-wrap">
                    <div className={`carousel`}>
                        <div className="carousel__body">
                            <Arrows onClick={onArrowClick} extra_classes="day-arrow"/>
                            <div className="carousel__overflow">
                                <div className="carousel__day_wrap">
                                    {carouselDates.map((item, index) => <DayButton key={index} {...item} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

DayCarousel.propTypes = {
    startDate: PropTypes.object.isRequired,
    selectedDate: PropTypes.object,
    onDayClick: PropTypes.func,
    type: PropTypes.string,
    amount: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
};
