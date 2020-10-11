import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Loader from "../../components/general/Loader";
import MainHeaderSection from "../../components/header/MainHeaderSection";
import Breadcrumbs from "../../components/general/Breadcrumbs";
import VirtualFrame from "../../components/iframe/VirtualFrame";
const VirtualWalk = (props) => {
    const breadcrumb = props.page.breadcrumb;
    const data = props.page.acf.field_virtualwalk_list;
    return (
        <>
            {!data && <Loader/>}
            {!!data &&
            <>
                <MainHeaderSection extra_classes="subpage">
                    <Breadcrumbs breadcrumbs={breadcrumb}/>
                </MainHeaderSection>
                {
                    data.map((item, index) => (
                        <div className="section container">
                            <VirtualFrame data={item} key={index} />
                        </div>
                    ))
                }
            </>
            }
        </>
    );
}

export default withRouter(VirtualWalk);
