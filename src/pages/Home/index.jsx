import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Loader from "../../components/general/Loader";
import HomeSlider from "../../components/slider/HomeSlider";

const Home = (props) => {
    const data = props.page.acf;
    console.log(props);
    return (
        <>
            {!data && <Loader/>}
            {!!data &&
                <div className="homepage-container">
                    <HomeSlider slider_status={data.field_should_override_slider} data={data.field_override_slides}/>
                </div>
            }
        </>
    );
}

export default withRouter(Home);
