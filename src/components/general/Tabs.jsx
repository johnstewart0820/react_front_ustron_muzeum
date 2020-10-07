import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";

const Tabs = (props) => {
  const { background, title, subtitle, tabs, linkToMore, source } = props;
  const [current, setCurrent] = useState(tabs[0].id);

  const setCurrentSection = (section) => {
    setCurrent(section);
  };

  const tabContent = tabs.filter((tab) => current === tab.id)[0];

  // console.log(tabContent);

  return (
    <section
      className={`section mt-5 mb-5 pt-5 pb-5 ${background && " bg-primary"}`}
    >
      <div className="container">
        <div className="row pb-4 align-items-end align-content-end">
          <div className="col-4">
          <small>{subtitle}</small>
            <h3 className="mb-0">
              {title}
            </h3>
          </div>
          <div className="col-6 offset-2">
            <div className="section-switcher in-col">
              {tabs &&
                tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    className={current === tab.id ? "active" : ""}
                    onClick={() => setCurrentSection(tab.id)}
                  >
                    {tab.title}
                    {current === tab.id && (
                      <FontAwesomeIcon icon={faSortUp} size="2x" />
                    )}
                  </button>
                ))}
            </div>
          </div>
        </div>
        <div className="row pt-5 pb-4">{tabContent.content}</div>
      </div>
    </section>
  );
};
export default Tabs;
