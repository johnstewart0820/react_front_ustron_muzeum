import React from "react";
import {Link} from "react-router-dom";
import DefaultImage from "../../img/loop/2.png";
import {museum_url} from "../../extra/main_menu";
import Locale from "../../utils/Locale";

const AboutInfo = (props) => {
  const locale = Locale.getLocale();
  const data = props.data;
  return (
    <section className="section about-info mt-5 mb-5 pt-5 pb-5">
      <div className="row d-flex justify-content-between">
        <div className="col-12 col-md-5"><img src={DefaultImage} alt="" className="img-full featured-image" /></div>
        <div className="col-12 col-md-6 mb-5">
          <small>{data.field_about_title}</small>
          <h3>{data.field_about_subtitle}</h3>
          <div className="row mt-5">
            {
              data && data.field_about_icons && data.field_about_icons.map((item, index) => (
                <div className="col-6 col-md-6" key={index}>
                  <Link key={index} to={`${item.field_about_url.split(museum_url)[1]}`} className="about-more-item open-sans">
                    <img src={item.field_about_icon} alt="xx" />
                    <span>{item.field_about_description}</span>
                  </Link>
                </div>
              ))
            }
          </div>
          <Link to={!data.field_about_button_link ? "#" : `${data.field_about_button_link.split(museum_url)[1]}`} className="btn btn-primary btn-about-link">
            {data.field_about_button_title}
          </Link>
        </div>
      </div>
    </section>
  );
};
export default AboutInfo;
