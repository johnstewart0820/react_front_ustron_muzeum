import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import Loader from "../../components/general/Loader";

import EducationVideos from "../../components/education/education_videos";
import EducationSocialMedia from "../../components/education/education_social_media";
import MainHeaderSection from "../../components/header/MainHeaderSection";
import Breadcrumbs from "../../components/general/Breadcrumbs";

const EducationFilm = (props) => {
    const breadcrumb = props.page.breadcrumb;
    
    return (
            <>
                <MainHeaderSection extra_classes="subpage">
                    <Breadcrumbs breadcrumbs={breadcrumb}/>
                </MainHeaderSection>
                <EducationVideos data={props.page.acf}></EducationVideos>
                <EducationSocialMedia data={props.page.acf}></EducationSocialMedia>
            </>
    );
}

export default withRouter(EducationFilm);
