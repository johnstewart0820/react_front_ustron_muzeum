import React, {useEffect, useState} from "react";
import { SiteInfoContextConsumer } from "../../constants/SiteInfoContext";


const Footer = (props) => {
  return (
    <SiteInfoContextConsumer>
      { ({ footer_address, footer_hours, footer_links  }) => (
        <footer className="main-footer">
            <div className="row align-items-end d-flex justify-content-around">
              <div className="footer-address" dangerouslySetInnerHTML={{__html: footer_address}}>
              </div>
              <div className="footer-hours" dangerouslySetInnerHTML={{__html: footer_hours}}>
              </div>
              <div className="footer-links" dangerouslySetInnerHTML={{__html: footer_links}}>
              </div>
            </div>
        </footer>
      )}
    </SiteInfoContextConsumer>
  );
};

export default Footer;
