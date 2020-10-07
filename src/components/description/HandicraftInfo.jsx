import React from "react";
import {Link} from "react-router-dom";
const HandicraftInfo = (props) => {
  const data = props.data;
  return (
    <section className="container section handicraft-info mb-5 mt-5 pt-5 pb-5">
      <div>
        <small>O muzeum</small>
        <h3 className="mb-5">
          <div className="handicraft-main-title">
            {data.field_handicraft_title}
          </div>
        </h3>
      </div>
      <div className="row">
          <div className="col-md-6 handicraft-link">
            <div className="handicraft-description mb-5">
              {data.field_handicraft_description}
            </div>
            <Link to={!data.field_handicraft_button_link ? "#" : data.field_handicraft_button_link} className="btn btn-primary btn-link">
              {data.field_handicraft_button_title}
            </Link>
          </div>
          <div className="col-md-6 handicraft-img-container row">
            {
              data.field_handicraft_elements.map((item, key) => (
                <div className="col-md-4 handicraft-img-cover">
                  <img src={item.field_handicraft_elements_image} className="img-full img-handicraft" />
                  <div className="handicraft-decription">
                    {item.field_handicraft_elements_description}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </section>
  );
};
export default HandicraftInfo;
