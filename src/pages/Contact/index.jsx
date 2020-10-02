import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { ToastProvider } from 'react-toast-notifications';
import Axios from "axios";
import Loader from "../../components/general/Loader";


import ContactForm from "../../components/contact/contact-form";
import Description from "../../components/contact/description";
import LocationMap from "../../components/contact/map";
import ObjectInfo from "../../components/contact/object-info";

const Contact = (props) => {
    const {history} = props;
    const [info, setInfo] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        Axios.get("http://api.ustron.s3.netcore.pl/contents/posts/241")
        .then((response) => {
            setInfo(response.data.content);
            setLoading(false);
        });
    }, [])
    return (
        <ToastProvider>
           {loading && <Loader/>} 
           {!loading && 
            <>
                <Description data={info} />
                <ObjectInfo data={info} />
                <ContactForm />
                <LocationMap data={info}/>
            </>
           }
        </ToastProvider>
    );
}

export default withRouter(Contact);
