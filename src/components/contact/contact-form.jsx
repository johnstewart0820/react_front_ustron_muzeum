import React, { useState } from "react";
import { useToasts } from 'react-toast-notifications';
import { withRouter } from "react-router-dom";
import axios from "axios";
import I18n from '../../I18n';

const ContactForm = (props) => {
  const { addToast } = useToasts();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeBody = (e) => {
    setBody(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios.post('https://api.ustron.pl/sites/sendMessage', {
      domain: 'muzeum.ustron.pl',
      name: name,
      email: email,
      body: body
    })
    .then((response) => {
      if (response.data.status < 0) {
        addToast(response.data.msg, {
          appearance: 'error',
          autoDismiss: true
        });
      } else {
        addToast(response.data.msg, {
          appearance: 'success',
          autoDismiss: true
        });
      }
    }, (error) => {
      addToast(error.response.data.msg, {
        appearance: 'error',
        autoDismiss: true
      });
    })
  }
  return (
    <section className="section contact-form-section pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 mt-1">
            <form action="/" className="contact-form">
              <h3 className="mb-5 col-md-5 offset-md-2">{<I18n t="contact_form"/>}</h3>
              <div className="form-group offset-md-2 mb-5 col-md-5">
                <input 
                  type="text" 
                  className="form-control input-name" 
                  placeholder="Imię"
                  value={name}
                  onChange={onChangeName}
                />
              </div>
              <div className="form-group offset-md-2 mb-5 col-md-5">
                <input
                  type="email"
                  className="form-control input-email"
                  placeholder="Email"
                  value={email}
                  onChange={onChangeEmail}
                />
              </div>
              <div className="form-group offset-md-2 mb-5 col-md-12">
                <textarea
                  className="form-control input-body"
                  placeholder="Wiadomość"
                  rows="10"
                  value={body}
                  onChange={onChangeBody}
                >
                </textarea>
              </div>
              <div className="form-group offset-md-2 mb-5 col-md-12">
                <a className="btn btn-primary" onClick={onSubmit}>
                  {<I18n t="send"/>}
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
};

export default withRouter(ContactForm);
