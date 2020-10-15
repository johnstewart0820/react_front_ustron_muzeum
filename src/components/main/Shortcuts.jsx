import React from "react";

const Shortcuts = (props) => {
  const data = props.data;

  return (
    <section className="section bg-light-gray mt-5 mb-5 pt-5 pb-5">
      <div className="container">
        <div className="row pb-4 pt-5 justify-content-center">
          <div className="col-12 col-md-6 offset-md-1">
            <small>{data.field_about_subtitle}</small>
            <h3>
              {data.field_cut_title}
            </h3>
          </div>
        </div>
        <div className="row">
          {data.field_cut &&
            data.field_cut.map((link, index) => (
              <div key={index} className="col-12 col-md-3 mt-5 mb-5">
                <a href={link.field_shortcuts_link}><img src={link.field_shortcuts_image} alt="" width="50%" className="shortcuts_img"/></a>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Shortcuts;
