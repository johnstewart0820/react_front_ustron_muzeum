import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import LoopSearchPost from "../../components/search/LoopSearchPost";
import PaginatedSearchPage from "../../components/general/PaginatedSearchPage";

const Search = (props) => {
    return (
        <PaginatedSearchPage
            page={props}
            itemComponent={LoopSearchPost}
            containerClasses={'search'}
        />
    );
}

export default withRouter(Search);
