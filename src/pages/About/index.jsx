import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const About = (props) => {
    const {history} = props;
    return (
        <>
        {window.location.href}
        </>
    );
}

export default withRouter(About);
