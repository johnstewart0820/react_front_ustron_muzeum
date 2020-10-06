import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Loader from "../../components/general/Loader";
import HomeSlider from "../../components/main/HomeSlider";
import HarvestInfo from "../../components/description/HarvestInfo";
import ResearchInfo from "../../components/description/ResearchInfo";
import MonumentsInfo from "../../components/description/MonumentsInfo";
import HandicraftInfo from "../../components/description/HandicraftInfo";
import PeoriodicsInfo from "../../components/description/PeoriodicsInfo";
import MetallurgyInfo from "../../components/description/MetallurgyInfo";
import MainHeaderSection from "../../components/header/MainHeaderSection";
import Breadcrumbs from "../../components/general/Breadcrumbs";

const Description = (props) => {
    const data = props.page.acf;
    return (
        <>
            {!data && <Loader/>}
            {!!data &&
            <>
                <MainHeaderSection extra_classes="subpage">
                    <Breadcrumbs breadcrumbs={[{label: "Muzeum Ustroński", to: "/"}, {label: "O muzeum"}]}/>
                </MainHeaderSection>
                <div className="description-container">
                    <HomeSlider slider_status={data.field_should_override_slider} data={data.field_override_slides} height="500" extend_class="margin-bottom-500"/>
                    <HarvestInfo data={data} />
                    <ResearchInfo data={data} />
                    <MonumentsInfo data={data} />
                    <HandicraftInfo data={data} />
                    <PeoriodicsInfo data={data} />
                    <MetallurgyInfo data={data} />
                </div>
            </>
            }
        </>
    );
}

export default withRouter(Description);
