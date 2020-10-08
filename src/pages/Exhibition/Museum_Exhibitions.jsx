import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import LoopExhibitionPost from "../../components/exhibitions/LoopExhibitionPost";
import PaginatedExhibitionPage from "../../components/general/PaginatedExhibitionPage";

const MuseumExhibitions = (props) => {

    return (
        <>
            <PaginatedExhibitionPage
                page={props.page}
                itemComponent={LoopExhibitionPost}
            />
        </>
    );
}

export default withRouter(MuseumExhibitions);
