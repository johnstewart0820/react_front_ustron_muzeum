import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { ToastProvider } from 'react-toast-notifications';
import Loader from "../../components/general/Loader";

import ContactForm from "../../components/contact/contact-form";
import Description from "../../components/contact/description";
import LocationMap from "../../components/contact/map";
import ObjectInfo from "../../components/contact/object-info";
import MainHeaderSection from "../../components/header/MainHeaderSection";
import Breadcrumbs from "../../components/general/Breadcrumbs";

const Contact = (props) => {
    const {history} = props;
    const [info, setInfo] = useState(null);
    useEffect(() => {        
        setInfo(props.page);
    }, [])
    return (
        <ToastProvider>
            <MainHeaderSection extra_classes="subpage">
                <Breadcrumbs breadcrumbs={[{label: "Muzeum Ustroński", to: "/"}, {label: "Kontakt"}]}/>
            </MainHeaderSection>
            {!info && <Loader/>}
            {!!info && 
                <>
                <Description data={info} />
                <ObjectInfo data={info.acf} />
                <ContactForm />
                <LocationMap data={info}/>
                </>
            }

        </ToastProvider>
    );
}

export default withRouter(Contact);
