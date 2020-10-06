import React from "react";

import Tabs from "../general/Tabs";

const TabContentFormatter = (props) => {
  const { data } = props;
  return (
    <>
      <div className="col-4">{data.image}</div>
      <div className="col-8">
        <p className="mb-4 text-justify">{data.text}</p>
        <a href={data.moreLink} className="btn btn-primary">
          {data.button_title}
        </a>
      </div>
    </>
  );
};

const Chronicle = (props) => {
  const data = props.data;
  
  const tabs_content = [
    {
      id: 0,
      image: (
        <img
          src={data.field_chronicle_ustron_photo}
          alt=""
          className="img-fluid"
        />
      ),
      text: data.field_chronicle_ustron_description,
      moreLink: data.field_chronicle_ustron_button_link ? data.field_chronicle_ustron_button_link : "#",
      button_title: data.field_chronicle_ustron_button_title
    },
    {
      id: 1,
      image: (
        <img
          src={data.field_chronicle_museum_photo}
          alt=""
          className="img-fluid"
        />
      ),
      text: data.field_chronicle_museum_description,
      moreLink: data.field_chronicle_museum_button_link ? data.field_chronicle_museum_button_link : "#",
      button_title: data.field_chronicle_museum_button_title
    },
  ];

  return (
    <section className="section mt-5 mb-5 pt-5 pb-5">
      <Tabs
        source="events"
        subtitle="Recently at the Ustroń Museum"
        title="Events"
        linkToMore="test2"
        tabs={[
          {
            id: "tab1",
            title: "kronika Ustronia",
            content: <TabContentFormatter data={tabs_content[0]} />, // TODO: ADD SOURCE
          },
          {
            id: "tab2",
            title: "kronika wydarzen muzealnych",
            content: <TabContentFormatter data={tabs_content[1]} />, // TODO: ADD SOURCE
          },
        ]}
      />
    </section>
  );
};

export default Chronicle;
