import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import LoopNewsPost from "../../components/news/LoopNewsPost";
import PaginatedNewsPage from "../../components/general/PaginatedNewsPage";

const News = (props) => {
    return (
        <PaginatedNewsPage
            page={props.page}
            itemComponent={LoopNewsPost}
            containerClasses={'news'}
        />
    );
}

export default withRouter(News);
