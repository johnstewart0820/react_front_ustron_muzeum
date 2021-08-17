import React from "react";

const DayButton = ({disabled, active, containerStyles, monthName, dayName, date, sign, onClick}) => {
    const classes = disabled ? ' disabled' : active ? ' active' : '';
    const style = sign === false ? ' sign-day' : '';
    return (
        <button
            className={'day_main' + classes + style}
            onClick={onClick}
            style={containerStyles}
        >
            <h3>{monthName}</h3>
            <h1>{date}</h1>
            <hr/>
            <h4>{dayName}</h4>
        </button>
    )
}

export default DayButton;
