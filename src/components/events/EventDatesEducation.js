import React from 'react';
import PropTypes from "prop-types";

import { getAllFromDateObject } from "../../extra/date";

const DayNumMonth = ({ day_num, month_name }) => (
	<>
		<strong> { day_num } </strong> 
		<span> { month_name } </span>
	</>
)


export default function EventDatesEducation ({ start_date, end_date }) {

	const start_date_obj = getAllFromDateObject( start_date );
	const end_date_obj = getAllFromDateObject( end_date )
		
	return (
		<>
		{start_date && end_date &&
		<div className="event-dates-education">
			{ start_date_obj && end_date_obj && 
				<div className="event-dates-education__several_dates"> 
					<div className="event-dates-education__date"> od&nbsp;&nbsp;&nbsp; <DayNumMonth {...start_date_obj } /> </div>
					<div className="event-dates-education__date"> do&nbsp;&nbsp;&nbsp; <DayNumMonth {...end_date_obj } />  </div>
				</div>
			} 

			{ start_date_obj && !end_date_obj && 
				<div className="event-dates-education__date"> od&nbsp;&nbsp;&nbsp; <DayNumMonth {...start_date_obj } />  </div>
			}

			<div className="event-dates-education__time">
				{ start_date_obj && end_date_obj &&
					<>
						<div> { start_date_obj.time } </div>
						<div> { end_date_obj.time } </div>
					</>
				}  
				
				{ start_date_obj && !end_date_obj && <> { start_date_obj.time } </> }
			</div>
		</div>
		}
		</>
	)
}


EventDatesEducation.propTypes = { 
	start_date: PropTypes.instanceOf(Date),
	end_date: PropTypes.instanceOf(Date)
}