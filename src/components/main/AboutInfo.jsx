import React from "react";
import {Link} from "react-router-dom";
import DefaultImage from "../../img/loop/1.jpg";

const AboutInfo = (props) => {
  const data = props.data;
  return (
    <section className="container section about-info mt-5 mb-5 pt-5 pb-5">
      <div className="featured-image">
        <img src={DefaultImage} alt="" className="img-full" />
      </div>
      <div className="row">
        <div className="col-lg-7">&nbsp;</div>
        <div className="col-12 col-lg-5 mb-5">
          <h3>
            <small>{data.field_about_title}</small>
            {data.field_about_subtitle}
          </h3>

          <div className="row mt-5">
            {
              data && data.field_about_icons && data.field_about_icons.map((item, index) => (
                <div className="col-12 col-md-6">
                  <Link key={index} to="#" className="about-more-item">
                    <img src={item.field_about_icon} alt="xx" />
                    <span>{item.field_about_description}</span>
                  </Link>
                </div>
              ))
            }
          </div>
          <Link to={!data.field_about_button_link ? "#" : data.field_about_button_link} className="btn btn-primary">
            {data.field_about_button_title}
          </Link>
        </div>
      </div>
    </section>
  );
};
export default AboutInfo;
