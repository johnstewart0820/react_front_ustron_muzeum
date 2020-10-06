import React from "react";
import {Link} from "react-router-dom";
const PeoriodicsInfo = (props) => {
  const data = props.data;
  return (
    <section className="section container peoriodics-info mb-5">
      <div className="row">
          <div className="col-md-6 peoriodics-img-container">
            <img src={data.field_periodical_photo} className="img-full" />
          </div>
          <div className="col-md-6 peoriodics_link">
            <h3>
              <small>O muzeum</small>
              <div className="peoriodics-main-title mb-5">
                {data.field_periodical_title}
              </div>
            </h3>
            <div className="peoriodics-decription mb-5">
              {data.field_periodical_description}
            </div>
            <div className="peoriodics-more">
              <Link to={!data.field_periodical_button_title ? "#" : data.field_periodical_button_title} className="btn btn-primary peoriodics-link">
                {data.field_periodical_button_title}
              </Link>
            </div>
          </div>
          
        </div>
    </section>
  );
};
export default PeoriodicsInfo;
