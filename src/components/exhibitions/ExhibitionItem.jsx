import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function get_date(param) {
  // console.log(param);
  let month_list = [
    "Sty",
    "Lut",
    "Mar",
    "Kwi",
    "Maj",
    "Cze",
    "Lip",
    "Sie",
    "Wrz",
    "Paź",
    "Lis",
    "Gru",
  ];
  if (param != undefined && param != null && param.length != 0) {
    let date = param.split(".")[0];
    if (date.length == 1) date = "0" + date;
    let month = param.split(".")[1];
    let year = param.split(".")[2].split(" ")[0];
    // console.log(month_list[parseInt(month) - 1] + " " + date + ", " + year);
    return month_list[parseInt(month) - 1] + " " + date + ", " + year;
  } else return "";
}

function get_time(param) {
  if (param != undefined && param != null && param.length != 0) {
    return param.split(".")[2].split(" ")[1];
  } else {
    return "";
  }
}

const ExhibitionItem = (props) => {
  // console.log(data);
  const data = props.data;
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  useEffect(() => {
    if (
      data &&
      data.event_start_date_label &&
      data.event_end_date_label
    ) {
      setStartDate(data.event_start_date_label);
      setEndDate(data.event_end_date_label);
    }
  }, []);

  return (
    <div className="col-12 col-md-3 list-item">
      <Link to={'#'}>
        <div
          className="list-item-thumb"
          style={{ backgroundImage: `url(${data.image})` }}
        >
          {data && data.image && (
            <img className="img-style invisible" src={data.image} />
          )}
          {data && data.category && (
            <div className="over-info">{data.category}</div>
          )}
        </div>
        {data && data.categories_labels && (
          <p className="color-gold pt-4">{data.categories_labels}</p>
        )}

        <div className="list-item-time-info d-inline-block p-3 mt-4 mb-4">
          <div className="row align-items-center">
            <div className="col text-center flex-grow-1 font-weight-bold">
              <div className="date-details">
                <span className="date-prefix">od</span>
                <span className="month text-uppercase">
                  {get_date(start_date)}
                </span>
                <div className="flex-grow-0 time">
                  <span className="hour-info font-weight-bold">
                    {get_time(start_date)}
                  </span>
                </div>
              </div>
              <div className="date-details">
                <span className="date-prefix">do</span>
                <span className="month text-uppercase">
                  {get_date(end_date)}
                </span>
                <div className="flex-grow-0 time">
                  <span className="hour-info font-weight-bold">
                    {get_time(end_date)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {data && data.title && <h3>{data.title}</h3>}
      </Link>
    </div>
  );
};

export default ExhibitionItem;
