import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Loader from "../../components/general/Loader";
import HomeSlider from "../../components/main/HomeSlider";
import ObjectInfo from "../../components/main/object-info";
import AboutInfo from "../../components/main/AboutInfo";
import Shortcuts from "../../components/main/Shortcuts";
import Chronicle from "../../components/main/Chronicle";
import EducationSection from "../../components/main/EducationSection";

const Home = (props) => {
    const data = props.page.acf;
    return (
        <>
            {!data && <Loader/>}
            {!!data &&
                <div className="homepage-container">
                    <HomeSlider slider_status={data.field_should_override_slider} data={data.field_override_slides} height="700"/>
                    <ObjectInfo data={data} />
                    <AboutInfo data={data} />
                    <Shortcuts data={data} />
                    <Chronicle data={data} />
                    {/* <EducationSection
                        subtitle="Ostatnio w Muzeum Ustroński"
                        title={data.field_education_title}
                        background
                        data={data.field_education_category}
                    /> */}
                </div>
            }
        </>
    );
}

export default withRouter(Home);
