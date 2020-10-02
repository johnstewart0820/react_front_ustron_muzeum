import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import Loader from "../../components/general/Loader";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import I18n from '../../I18n';

const Archive = (props) => {
    const {history} = props;
    const [info, setInfo] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        Axios.get("http://api.ustron.s3.netcore.pl/contents/posts/240")
        .then((response) => {
            setInfo(response.data.content);
            setLoading(false);
        });
    }, [])
    return (
        <>
            {loading && <Loader/>}
            {!loading && 
            <>
                <section
                    className="section hero-image"
                    style={{
                        backgroundImage: `url("${ info && info.acf && info.acf.field_header_digital_archive_photo}")`,
                    }}
                >
                    <div className="container pt-5 pb-5">
                        <div className="row pt-5 pb-5">
                            <div className="col-12 pt-5 pb-5 text-center">
                            <h1 className="text-uppercase mb-5 archive-image-desc" dangerouslySetInnerHTML={{__html: info && info.acf && info.acf.field_header_digital_archive_title}}>
                            </h1>
                            <a href="#" className="btn btn-secondary mt-5">
                                { info && info.acf && info.acf.field_header_digital_archive_button_title }
                            </a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="section mt-5 mb-5 pb-5 main-contact-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <div className="address-details">
                                    <p>
                                        <I18n t="address"/> 
                                        <br />
                                        <strong>
                                            { info && info.acf && info.acf.field_digital_archive_address.split(',')[0] },
                                            <br />
                                            { info && info.acf && info.acf.field_digital_archive_address.split(',')[1] }
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
                                            { info && info.acf && info.acf.field_digital_archive_telephone && info.acf.field_digital_archive_telephone.split(', +')[0] }
                                        </a>
                                        <a className="d-block" href="#.fff">
                                            { info && info.acf && info.acf.field_digital_archive_telephone && info.acf.field_digital_archive_telephone.split(', +')[1] }
                                        </a>
                                    </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-1 pr-0">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </div>
                                        <div className="col">
                                            <a href={ info && info.acf && info.acf.field_digital_archive_mail }>
                                            { info && info.acf && info.acf.field_digital_archive_mail }
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <p><I18n t="nip"/> : { info && info.acf && info.acf.field_digital_archive_nip }</p>
                                <br/>
                                <p><I18n t="bank_account_number"/>: 
                                    { info && info.acf && info.acf.field_digital_archive_bank && info.acf.field_digital_archive_bank.split(' 4')[0].split('ki')[0] + 'ki' }
                                </p>
                                <p>
                                    { info && info.acf && info.acf.field_digital_archive_bank && info.acf.field_digital_archive_bank.split(' 4')[0].split('ki')[1] }
                                </p>
                                <br/>
                                <p>4
                                    { info && info.acf && info.acf.field_digital_archive_bank && info.acf.field_digital_archive_bank.split(' 4')[1] }
                                </p>
                            </div>
                            <div className="col-12 col-md-8">
                                <div class="contact-block" dangerouslySetInnerHTML={{__html: info && info.acf && info.acf.field_digital_archive_description}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            } 
        </>
    );
}

export default withRouter(Archive);
