import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NewsItem = (props) => {
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
          <p className="color-gold pt-4 pb-4">{data.categories_labels.split(',')[data.categories_labels.split(',').length - 1]}</p>
        )}
        {data && data.title && <h3>{data.title}</h3>}
        <div className="news-description">
          {data && data.short}
        </div>
      </Link>
    </div>
  );
};

export default NewsItem;
