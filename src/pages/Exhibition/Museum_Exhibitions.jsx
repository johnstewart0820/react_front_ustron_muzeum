import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import MainHeaderSection from "../../components/header/MainHeaderSection";
import Breadcrumbs from "../../components/general/Breadcrumbs";
import Loader from "../../components/general/Loader";
import {API} from "../../extra/API";
import ExhibitionItem from "../../components/exhibitions/ExhibitionItem";

const MuseumExhibitions = (props) => {
    // const data = props.page.acf;
    const [data, setData] = useState([]);
    useEffect(() => {
        API.getByConfig(props.page.acf.field_exhibitions).then(res => {
            console.log(res.data);
            setData(res.data);
        }).catch(err => {
            console.error(err);
            setData(false);
        });
    }, []);
    return (
        <>
            {!data && <Loader/>}
            {!!data &&
                <>
                <MainHeaderSection extra_classes="subpage">
                    <Breadcrumbs breadcrumbs={[{label: "Muzeum Ustroński", to: "/"}, {label: "Wystawy"}]}/>
                </MainHeaderSection>
                <section className="section mb-5">
                    <div className="container">
                        <div className="row">
                            {data && data.contents && data.contents.map((item, index) => (
                            <ExhibitionItem key={index} data={item} />
                            ))}
                        </div>
                    </div>
                </section>
                </>
            }
        </>
    );
}

export default withRouter(MuseumExhibitions);
