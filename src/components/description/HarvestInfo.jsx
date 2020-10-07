import React from "react";
import {Link} from "react-router-dom";
import DefaultImage from "../../img/loop/2.png";

const HarvestInfo = (props) => {
  const data = props.data;
  return (
    <section className="container section about-info mb-5 pt-5 pb-5">
      <div >
          <small>O muzeum</small>
          <div>
            <h3>
              {data.field_crops_title}
            </h3>
          </div>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-9">
              <div className="row mt-5">
                {
                  data && data.field_crops && data.field_crops.map((item, index) => (
                    <div className="col-12 col-md-4">
                      <a key={index} href={item.field_crops_link} className="description-more-item">
                        <img src={item.field_crops_icon} alt="xx" />
                        <span>{item.field_crops_description}</span>
                      </a>
                    </div>
                  ))
                }
                <div className="col-12 col-md-4 description-harvest-more">
                  <Link to={!data.field_crops_button_link ? "#" : data.field_crops_button_link} className="btn btn-primary">
                    {data.field_crops_button_title}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};
export default HarvestInfo;
