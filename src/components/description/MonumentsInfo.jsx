import React from "react";
import {Link} from "react-router-dom";
import DefaultImage from "../../img/loop/3.jpg"
const MonumentsInfo = (props) => {
  const data = props.data;
  return (
    <section className="section monuments-info mb-5">
      <div className="row">
          <div className="col-md-6 monuments-img-container">
            {
              data.field_monument_elements.map((item, key) => (
                <div className="col-md-6">
                  <img src={item.field_monument_elements_photo} className="img-full" />
                  <div className="monument-title">
                    {item.field_monument_elements_title}
                  </div>
                  <div className="monument-decription">
                    {item.field_monument_elements_description}
                  </div>
                </div>
              ))
            }
          </div>
          <div className="col-md-6 monument_link">
            <h3>
              <small>O muzeum</small>
              <div className="monuments-main-title mb-5">
                {data.field_monument_title}
              </div>
            </h3>
            
            <div className="monument-harvest-more">
              <Link to={!data.field_monument_button_link ? "#" : data.field_monument_button_link} className="monument-link">
                {data.field_monument_button_title}
              </Link>
            </div>
          </div>
          
        </div>
    </section>
  );
};
export default MonumentsInfo;
