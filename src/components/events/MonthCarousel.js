import React from "react";
import PropTypes from 'prop-types';
import moment from "moment";
import Angle from "../../svg/components/Angle";

export const MonthCarousel = props => {
    const [month, setMonth] = React.useState(moment(props.startDate));

    React.useEffect(() => {
        setMonth(props.startDate ? moment(props.startDate) : null);
    }, []);
    const arrowPrevClick = (e) => {
        setMonth(moment(month.subtract(1, 'months')));
        props.handlePrevMonth(month);
    };
    const arrowNextClick = (e) => {
        // console.log(moment().add(1, 'month').calendar());
        setMonth(moment(month.add(1, 'months')));
        props.handleNextMonth(month);
    };
    return (
        <div className="month-button-container month-arrows">
            <div onClick={ e => arrowPrevClick( e )} className="arrow-div">
                <Angle  direction={ "left" } />
                <span className="d-none"> arrow </span>
            </div>
            <div className="month">
                {moment(month).format('MMMM').toUpperCase()}
            </div>
            <div className="year">
                {moment(month).format('YYYY').toUpperCase()}
            </div>
            <div onClick={ e => arrowNextClick( e )} className="arrow-div">
                <Angle direction={ "right" } />
                <span className="d-none"> arrow </span>
            </div>

        </div>
    );
};

MonthCarousel.propTypes = {
    startDate: PropTypes.object.isRequired,
    handleNextMonth: PropTypes.func.isRequired,
    handlePrevMonth: PropTypes.func.isRequired,
};
