import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
import I18n from '../../I18n';

const get_contact_hours = (param) => {
  const suffix = {
    from: '_from',
    to: '_to'
  };
  let hour_list = [];
  for (let i = 1; i <= 7; i ++) {
    hour_list[i - 1] = param[i + suffix.from] + " - " + param[i + suffix.to]
  }
  return hour_list;
}
const ObjectInfo = (props) => {
  console.log(props);
  const data = props.data;
  const [current, setCurrent] = useState("hours");
  const [hour_list, setHourList] = useState([]);
  const setCurrentSection = (section) => {
    setCurrent(section);
  };
  useEffect(() => {
    if (data && data.field_hours) {
      const hourlist = get_contact_hours(data.field_hours);
      console.log(hourlist);
      setHourList(hourlist);
    }

  }, []);
  return (
    <section className="container section object-info">
      <div className="row">
        <div className="col-12 col-lg-5 mb-5">
          {current === "hours" ? (
            <>
              <small>{ data && data.field_hours_title && data.field_hours_title }</small>
              {data && data.field_hours_description && <div className="object-info-description" dangerouslySetInnerHTML={{__html: data.field_hours_description}}></div>}
            </>
          ) : (
            <>
              <h3>
                <small>{ data.field_price_title }</small>
              </h3>
              {data && data.field_price_description && <div className="object-info-description" dangerouslySetInnerHTML={{__html: data.field_price_description}}></div>}
            </>
          )}
        </div>
        <div className="col-lg-7">
          <div className="section-switcher">
            <button
              type="button"
              className={current === "hours" ? "active" : ""}
              onClick={() => setCurrentSection("hours")}
            >
              { <I18n t="opening_hours"/> }
              {current === "hours" && (
                <FontAwesomeIcon icon={faSortUp} size="2x" />
              )}
            </button>
            <button
              type="button"
              className={current === "prices" ? "active" : ""}
              onClick={() => setCurrentSection("prices")}
            >
              { <I18n t="price_list"/> }
              {current === "prices" && (
                <FontAwesomeIcon icon={faSortUp} size="2x" />
              )}
            </button>
          </div>
          {current === "hours" ? (
            <div className="working-hours mt-4">
              <div className="days-column">
                <FontAwesomeIcon icon={faClock} size="2x" />
                <div className="day">{ <I18n t="monday"/> }</div>
                <div className="day">{ <I18n t="tuesday"/> }</div>
                <div className="day">{ <I18n t="wednesday"/> }</div>
                <div className="day">{ <I18n t="thursday"/> }</div>
                <div className="day">{ <I18n t="friday"/> }</div>
                <div className="day">{ <I18n t="saturday"/> }</div>
                <div className="day">{ <I18n t="sunday"/> }</div>
              </div>
              <div className="hours-column">
                {hour_list.map((hour, index)=> (
                   <div key={index} className="day">{hour}</div>
                ))}
              </div>
              
            </div>
          ) : (
            <div className="pricing mt-4">
              <div className="price-list-detail" dangerouslySetInnerHTML={{__html: data.field_price}}></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

ObjectInfo.propTypes = {
	data: PropTypes.object
}
export default withRouter(ObjectInfo);
