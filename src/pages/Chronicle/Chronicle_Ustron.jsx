import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import Loader from "../../components/general/Loader";

import ChroniclePost from "../../components/chronicle/chronicle_post";
import ChronicleNavigator from "../../components/chronicle/chronicle_navigator";

const ChronicleUstron = (props) => {
    const [info, setInfo] = useState({});
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0)
    useEffect(() => {
        Axios.get("https://api.ustron.s3.netcore.pl/contents/posts/646")
        .then((response) => {
            setInfo(response.data.content);
            setLoading(false);
        });
    }, [])
    const handleClick = (index) => {
        setIndex(index - 1);
        window.scrollTo({
          top:0,
          behavior: "smooth"
        });
    }
    return (
        <>
            {loading && <Loader/>} 
            {!loading && 
            <>
                <ChroniclePost data={info.acf.field_chronicle_posts[index]}/>
                <ChronicleNavigator data={info.acf.field_chronicle_posts.length} onChangeHandler= {handleClick} />
            </>
            }
        </>
    );
}

export default withRouter(ChronicleUstron);
