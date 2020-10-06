import React from "react";
import { Link } from "react-router-dom";

const ListItemEducation = ({ data }) => {
  return (
    <div className="col list-item">
      <Link to="/2">
        <div className="list-item-thumb">{data.thumb}</div>
        {data.exhibition_type && (
          <p className="color-gold pt-4 pb-4">{data.exhibition_type}</p>
        )}
        <h3 className="mb-4">{data.title}</h3>
        <div className="list-item-time-info d-inline-block p-3 mt-4 mb-4">
          <div className="row align-items-center">
            <div className="col text-center flex-grow-1 font-weight-bold">
              LIS 12, 2020
            </div>
            <div className="col flex-grow-0">
              <span className="hour-info font-weight-bold">19:00</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListItemEducation;
