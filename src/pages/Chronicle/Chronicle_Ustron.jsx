import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import MainHeaderSection from "../../components/header/MainHeaderSection";
import Breadcrumbs from "../../components/general/Breadcrumbs";
import Loader from "../../components/general/Loader";

import ChroniclePost from "../../components/chronicle/chronicle_post";
import ChronicleNavigator from "../../components/chronicle/chronicle_navigator";

const ChronicleUstron = (props) => {
    const breadcrumb = props.page.breadcrumb;
    const [info, setInfo] = useState({});
    const [index, setIndex] = useState(0);
    useEffect(() => {
        setInfo(props.page);
    }, [])
    const handleClick = (index) => {
        setIndex(index - 1);
        window.scrollTo({
          top:0,
          behavior: "smooth"
        });
    }
    return (
        console.log(info && info.acf && info.acf.field_chronicle_posts && info.acf.field_chronicle_posts),
        <>
            <MainHeaderSection extra_classes="subpage">
                <Breadcrumbs breadcrumbs={breadcrumb}/>
            </MainHeaderSection>
            <ChroniclePost data={info && info.acf && info.acf.field_chronicle_posts && info.acf.field_chronicle_posts[info.acf.field_chronicle_posts.length - index - 1]}/>
            <ChronicleNavigator data={info && info.acf && info.acf.field_chronicle_posts && info.acf.field_chronicle_posts.length} onChangeHandler= {handleClick} />
        </>
    );
}

export default withRouter(ChronicleUstron);
