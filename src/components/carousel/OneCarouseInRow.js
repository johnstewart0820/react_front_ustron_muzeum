import React from 'react';
import PropTypes from 'prop-types';
import Carousel from "./Carousel";
import Loader from "../general/Loader";

const OneCarouseInRow = ({loading, carousel}) => (
    <section className="one-carousel-in-row">
        {loading && <Loader/>}

        <div>
            {!loading && <Carousel {...carousel} />}
        </div>
    </section>
);

OneCarouseInRow.propTypes = {
    loading: PropTypes.bool,
    carousel: PropTypes.object.isRequired,
};

export default OneCarouseInRow;
