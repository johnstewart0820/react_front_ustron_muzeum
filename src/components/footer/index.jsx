import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import Axios from "axios";

const MainFooter = (props) => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-2" dangerouslySetInnerHTML={{__html: props.data.footer_address}}>
          </div>
          <div className="col-6" dangerouslySetInnerHTML={{__html: props.data.footer_hours}}>
          </div>
          <div className="col-4" dangerouslySetInnerHTML={{__html: props.data.footer_links}}>
          </div>
        </div>
      </div>
    </footer>
  );
};

MainFooter.propTypes = {
  data: PropTypes.object,
};
export default MainFooter;
