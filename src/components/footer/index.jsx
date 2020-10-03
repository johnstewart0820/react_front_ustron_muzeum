import React, {useEffect, useState} from "react";
import { SiteInfoContextConsumer } from "../../constants/SiteInfoContext";


const Footer = (props) => {
  return (
    <SiteInfoContextConsumer>
      { ({ footer_address, footer_hours, footer_links  }) => (
        <footer className="main-footer">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-2" dangerouslySetInnerHTML={{__html: footer_address}}>
              </div>
              <div className="col-6" dangerouslySetInnerHTML={{__html: footer_hours}}>
              </div>
              <div className="col-4" dangerouslySetInnerHTML={{__html: footer_links}}>
              </div>
            </div>
          </div>
        </footer>
      )}
    </SiteInfoContextConsumer>
  );
};

export default Footer;
