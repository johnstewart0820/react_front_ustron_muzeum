import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import I18n from '../../I18n';
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Description = (props) => {
  const info = props.data;
  return (
    <div className="section mt-5 mb-5 pb-5 main-contact-info">
      <div className="container">
        <div className="row">
            <div className="col-12 col-md-4">
                <div className="address-details">
                    <p>
                        <I18n t="address"/>
                        <br />
                        <strong>
                            { info && info.acf && info.acf.field_map_address && info.acf.field_map_address.split(',')[0] },
                            <br />
                            { info && info.acf && info.acf.field_map_address && info.acf.field_map_address.split(',')[1] }
                        </strong>
                    </p>
                </div>
                <div className="contact-details mt-5">
                    <div className="row">
                    <div className="col-1 pr-0">
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className="col contact-phone">
                        <a className="d-block" href="#.fff">
                        { info && info.acf && info.acf.field_museum_contact_telephone && info.acf.field_museum_contact_telephone.split(', +')[0] }
                        </a>
                        <a className="d-block" href="#.fff">
                        { info && info.acf && info.acf.field_museum_contact_telephone && info.acf.field_museum_contact_telephone.split(', +')[1] }
                        </a>
                    </div>
                    </div>
                    <div className="row mt-3">
                    <div className="col-1 pr-0">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="col">
                        <a href={ info && info.acf && info.acf.field_museum_contact_mail }>
                        { info && info.acf && info.acf.field_museum_contact_mail }
                        </a>
                    </div>
                    </div>
                </div>
                <br/>
                <br/>
                <p>{ <I18n t="nip"/> }: { info && info.acf && info.acf.field_museum_contact_nip }</p>
                <br/>
                <p>{ <I18n t="bank_account_number"/>}: { info && info.acf && info.acf.field_museum_contact_bank && info.acf.field_museum_contact_bank.split(' 4')[0].split('ki')[0] + 'ki' }</p>
                <p>{ info && info.acf && info.acf.field_museum_contact_bank && info.acf.field_museum_contact_bank.split(' 4')[0].split('ki')[1] }</p>
                <br/>
                <p>4{ info && info.acf && info.acf.field_museum_contact_bank && info.acf.field_museum_contact_bank.split(' 4')[1] }</p>
            </div>
            <div className="col-12 col-md-8">
            <div class="contact-block" dangerouslySetInnerHTML={{__html: info && info.acf && info.acf.field_museum_contact_description}}></div>
            </div>
        </div>
      </div>
    </div>
  )
};
Description.propTypes = {
	data: PropTypes.object
}
export default withRouter(Description);
