import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import Loader from "../../components/general/Loader";

import EducationVideos from "../../components/education/education_videos";
import EducationSocialMedia from "../../components/education/education_social_media";

const EducationIndustriada = (props) => {
    const [info, setInfo] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        Axios.get("http://api.ustron.s3.netcore.pl/contents/posts/238")
        .then((response) => {
            setInfo(response.data.content);
            setLoading(false);
        });
    }, [])
    
    return (
        <>
            {loading && <Loader/>} 
            {!loading && 
            <>
                <EducationVideos data={info && info.acf}></EducationVideos>
                <EducationSocialMedia data={info && info.acf}></EducationSocialMedia>
            </>
            }
        </>
    );
}

export default withRouter(EducationIndustriada);
