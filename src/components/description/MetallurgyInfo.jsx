import React from "react";
import { Link } from "react-router-dom";
const MetallurgyInfo = (props) => {
  const data = props.data;
  return (
    <section className="container section metallurgy-info mb-5 mt-5 pt-5 pb-5">
      <div className="row">
        <div className="col-md-6">
          <small>O muzeum</small>
          <div>
            <h3 className="mb-5">
              <div className="metallurgy-main-title">
                {data.field_metallurgy_title}
              </div>
            </h3>
            <div className="research-img-container-top mt-4 mb-4">
              <img src={data.field_metallurgy_photo} className="img-full" />
            </div>
          </div>
          <div className="row">
            <div className="metallurgy-link">
              <div className="metallurgy-description mb-5">
                <div dangerouslySetInnerHTML={{ __html: data.field_metallurgy_description }}></div>
              </div>
              {
                data.field_metallurgy_button_title ?
                  <Link to={!data.field_metallurgy_button_link ? "#" : data.field_metallurgy_button_link} className="btn btn-primary btn-link">
                    {data.field_metallurgy_button_title}
                  </Link>
                  :
                  <></>
              }

            </div>
            {data.field_metallurgy_elements
              ?
              <div className="col-md-6 metallurgy-img-container ">
                <div className="row">
                  {
                    data.field_metallurgy_elements.map((item, key) => (
                      item.field_metallurgy_elements_number ?
                        <div className="col-lg-4 col-md-12 metallurgy-img-cover d-flex justify-content-center">
                          <div className="fix-content">
                            <div className=" img-metallurgy" >
                              {item.field_metallurgy_elements_number}
                            </div>
                            <div className="metallurgy-decription">
                              {item.field_metallurgy_elements_description}
                            </div>
                          </div>
                        </div>
                        :
                        <></>
                    ))
                  }
                </div>
              </div>
              :
              <></>
            }
          </div>
        </div>
        <div className="col-md-6 research-img-container">
          <img src={data.field_metallurgy_photo} className="img-full" />
        </div>
      </div>
    </section>
  );
};
export default MetallurgyInfo;
