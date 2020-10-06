import { Link } from "react-router-dom";
import React from "react";
import ListItemEducation from "../general/list-item-education";

const EducationSection = (props) => {
  
  const { background, title, subtitle, tabs, linkToMore, data } = props;
  return (
    <section
      className={`section mt-5 pt-5 pb-5 ${background && " bg-primary"}`}
    >
      <div className="container">
        <div className="row pb-4">
          <div className="col-6">
            <h3>
              <small>{subtitle}</small>
              {title}
            </h3>
          </div>
          <div className="col-4 offset-2 text-right">
            <Link to={linkToMore} className="btn btn-secondary-outlined">
              kalendarz imprez
            </Link>
          </div>
        </div>
        <div className="row pt-5 pb-4">
          {data && data.map((item) => <ListItemEducation data={item} />)}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
