import React from 'react';
import PropTypes from "prop-types";

import { getAllFromDateObject } from "../../extra/date";

const DayNumMonth = ({ day_num, month_name }) => (
	<>
		<strong> { day_num } </strong> 
		<span> { month_name } </span>
	</>
)


export default function EventDates ({ start_date, end_date }) {

	const start_date_obj = getAllFromDateObject( start_date );
	const end_date_obj = getAllFromDateObject( end_date )
		
	return (
		<>
		{start_date && end_date &&
		<div className="event-dates">
			{ start_date_obj && end_date_obj && 
				<div className="event-dates__several_dates"> 
					<div className="post-event-dates__date"> od&nbsp;&nbsp;&nbsp; <DayNumMonth {...start_date_obj } /> </div>
					<div className="post-event-dates__date"> do&nbsp;&nbsp;&nbsp; <DayNumMonth {...end_date_obj } />  </div>
				</div>
			} 

			{ start_date_obj && !end_date_obj && 
				<div className="post-event-dates__date"> od&nbsp;&nbsp;&nbsp; <DayNumMonth {...start_date_obj } />  </div>
			}


		</div>
		}
		</>
	)
}


EventDates.propTypes = { 
	start_date: PropTypes.instanceOf(Date),
	end_date: PropTypes.instanceOf(Date)
}