import React from "react";
import {Link} from "react-router-dom";
const PeoriodicsInfo = (props) => {
  const data = props.data;
  return (
    <section className="section container peoriodics-info mb-5">
      <div className="row">
          <div className="col-md-6 col-12 peoriodics-img-container" style={{backgroundImage: `url(${data.field_periodical_photo})`}}>
          </div>
          <div className="col-md-6 col-12 peoriodics_link">
            <small>O muzeum</small>
            <h3>
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
