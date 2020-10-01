import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import I18n from '../../I18n';

const Home = (props) => {
    const {history} = props;

    return (
        <>
            <I18n t="hello" />
        </>
    );
}

export default withRouter(Home);
