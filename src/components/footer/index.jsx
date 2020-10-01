import React, {useEffect, useState} from "react";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "../../styles/footer/footer.scss";
const MainFooter = (props) => {
  const [footerAddress, setFooterAddress] = useState('');
  const [footerHours, setFooterHours] = useState('');
  const [footerLinks1, setFooterLinks1] = useState('');
  const [footerLinks2, setFooterLinks2] = useState('');
  useEffect(() => {
    Axios.get("http://api.ustron.s3.netcore.pl/sites/getInfo?domain=muzeum.ustron.s3.netcore.pl")
    .then((response) => {
      let footer_address = response.data.info.template.layout['home-page'].widgets['footer-contact'].elements[0].content;
      let footer_hours = response.data.info.template.layout['home-page'].widgets['footer-hours'].elements[0].content;
      let footer_links_1 = response.data.info.template.layout['home-page'].widgets['footer-links-1'].elements[0].content;
      // let footer_links_2 = response.data.info.template.layout['home-page'].widgets['footer-links-2'].elements[0].content;
      setFooterAddress(footer_address );
      setFooterHours('<' + footer_hours);
      setFooterLinks1(footer_links_1);
      // setFooterLinks2(footer_links_2);
    });
  }, [])
  return (
    <footer className="main-footer">
      <div className="footer-address" dangerouslySetInnerHTML={{__html: footerAddress}}>
      </div>
      {/* <div className="working-hours" dangerouslySetInnerHTML={{__html: footerHours}}/> */}
      <div className="working-hours">
        <div className="days-column">
          <FontAwesomeIcon icon={faClock} size="2x" />
          <div className="day">Poniedziałek</div>
          <div className="day">Wtorek</div>
          <div className="day">Środa</div>
          <div className="day">Czwartek</div>
          <div className="day">Piątek</div>
          <div className="day">Sobota</div>
          <div className="day">Niedziela</div>
        </div>
        <div className="hours-column">
          <div className="day">9:00 - 15:00</div>
          <div className="day">9:00 - 15:00</div>
          <div className="day">9:00 - 15:00</div>
          <div className="day">9:00 - 15:00</div>
          <div className="day">9:00 - 15:00</div>
          <div className="day">
            9:00 – 13:00 (w czerwcu, lipcu i sierpniu 9:00 – 15:00)
          </div>
          <div className="day">
            9:00 – 13:00 (w czerwcu, lipcu i sierpniu 9:00 – 15:00)
          </div>
        </div>
      </div>
      <div className="contact-other" dangerouslySetInnerHTML={{__html: footerLinks1}}>
      </div>
    </footer>
  );
};

export default MainFooter;
