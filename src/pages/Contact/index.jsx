import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const Contact = (props) => {
    const {history} = props;
    useEffect(() => {
    }, [])
    return (
        <>
        {window.location.href}
        </>
    );
}

export default withRouter(Contact);
