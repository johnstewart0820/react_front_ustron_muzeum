import React from "react";
import {Link} from "react-router-dom";
import DefaultImage from "../../img/loop/3.jpg"
const ResearchInfo = (props) => {
  const data = props.data;
  return (
    <section className="container section about-info mb-5 pt-5 pb-5">
      <div className="row">
          <div className="col-md-6">
            <small>O muzeum</small>
            <h3>
              {data.field_research_title}
            </h3>
            <div className="research-img-container-top mt-4">
              <img src={data.field_research_photo.length > 0 ? data.field_research_photo : DefaultImage} className="img-full"/>
            </div>
            <div className="mt-5 research-info-description">
              {data.field_research_description}
            </div>
            <div className="research-harvest-more">
              <Link to={!data.field_research_button_link ? "#" : data.field_research_button_link} className="btn btn-primary">
                {data.field_research_button_title}
              </Link>
            </div>
          </div>
          <div className="col-md-6 research-img-container">
            <img src={data.field_research_photo.length > 0 ? data.field_research_photo : DefaultImage} className="img-full"/>
          </div>
        </div>
    </section>
  );
};
export default ResearchInfo;
