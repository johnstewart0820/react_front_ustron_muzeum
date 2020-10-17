import React from "react";
import {Link} from "react-router-dom";
const MetallurgyInfo = (props) => {
  const data = props.data;
  return (
    <section className="container section metallurgy-info mb-5 mt-5 pt-5 pb-5">
      <div>
        <small>O muzeum</small>
        <div>
          <h3 className="mb-5">
            <div className="metallurgy-main-title">
              {data.field_metallurgy_title}
            </div>
          </h3>
        </div>
      </div>
      <div className="row pl-5">
          <div className="col-md-6 metallurgy-link">
            <div className="metallurgy-description mb-5">
              <div dangerouslySetInnerHTML={{__html: data.field_metallurgy_description}}></div>
            </div>
            <Link to={!data.field_metallurgy_button_link ? "#" : data.field_metallurgy_button_link} className="btn btn-primary btn-link">
              {data.field_metallurgy_button_title}
            </Link>
          </div>
          <div className="col-md-6 metallurgy-img-container row">
            {
              data.field_metallurgy_elements.map((item, key) => (
                <div className="col-md-4 metallurgy-img-cover">
                  <div className=" img-metallurgy" >
                    {item.field_metallurgy_elements_number}
                  </div>
                  <div className="metallurgy-decription">
                    {item.field_metallurgy_elements_description}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </section>
  );
};
export default MetallurgyInfo;
