import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Loader from "../../components/general/Loader";
import HomeSlider from "../../components/main/HomeSlider";
import ObjectInfo from "../../components/main/object-info";
import AboutInfo from "../../components/main/AboutInfo";
import Shortcuts from "../../components/main/Shortcuts";
import Chronicle from "../../components/main/Chronicle";

const Home = (props) => {
    const data = props.page.acf;
    console.log(props);
    return (
        <>
            {!data && <Loader/>}
            {!!data &&
                <div className="homepage-container">
                    <HomeSlider slider_status={data.field_should_override_slider} data={data.field_override_slides}/>
                    <ObjectInfo data={data} />
                    <AboutInfo data={data} />
                    <Shortcuts data={data} />
                    <Chronicle data={data} />
                </div>
            }
        </>
    );
}

export default withRouter(Home);
