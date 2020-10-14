import React, {useEffect, useState} from "react";
import { SiteInfoContextConsumer } from "../../constants/SiteInfoContext";


const Footer = (props) => {
  return (
    <SiteInfoContextConsumer>
      { ({ footer_address, footer_hours, footer_links  }) => (
        <footer className="main-footer">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-12 col-md-2 footer-address" dangerouslySetInnerHTML={{__html: footer_address}}>
              </div>
              <div className="col-12 col-md-6 footer-hours" dangerouslySetInnerHTML={{__html: footer_hours}}>
              </div>
              <div className="col-12 col-md-4 footer-links" dangerouslySetInnerHTML={{__html: footer_links}}>
              </div>
            </div>
          </div>
        </footer>
      )}
    </SiteInfoContextConsumer>
  );
};

export default Footer;
