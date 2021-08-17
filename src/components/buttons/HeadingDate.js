import React, {useEffect, useState} from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const HeadingDate = ({ date }) => {
	const [input_date, setInputDate] = useState(moment(date));
	const [day_name, setDayName] = useState('');
	const [month_name, setMonthName] = useState('');
	const [year_name, setYearName] = useState('');
	const [date_name, setDateName] = useState('');
	useEffect(()=> {
		const date = moment(input_date);
		setDayName(date.format('dddd').toUpperCase());
		setMonthName(date.format('MMMM').toUpperCase());
		setYearName(date.format('YYYY').toUpperCase());
		setDateName(date.date());
	}, []);
	return (
		<div className="date_heading_main">
			<div className="date_heading_date">
				{date_name}
			</div>
			<div className="date_heading_month_year_date">
				<div className="date_heading_month_year">
					<div className="date_heading_month">
						{month_name}
					</div>
					<div>
						{year_name}
					</div>
				</div>
				<div>
					{day_name}
				</div>
			</div>
		</div>
)}

HeadingDate.propTypes = {
	date: PropTypes.object,
}

export default HeadingDate;