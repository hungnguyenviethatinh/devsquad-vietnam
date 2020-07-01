import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';

import Box from '../../components/Box';
import Button from '../../components/Button';
import PageHeader from '../../components/PageHeader';
import TextArea from '../../components/TextArea';
import TextField from '../../components/TextField';

import { TOAST_TYPE, VALID_EMAIL_REGEX } from '../../core/Constants';

const Contact = (props) => {
  const { open, type, message, dispatchContactUs, dispatchToggleToast } = props;

  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [onError, setOnError] = React.useState({
    email: false,
    message: false,
  });

  const handleDataChange = (prop) => (event) => {
    const value = event.target.value;

    setOnError({
      ...onError,
      [prop]: !value.trim(),
    });
    setData({
      ...data,
      [prop]: value,
    });
  };

  const handleReset = () => {
    setData({ name: '', email: '', message: '' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let emailError = false,
      messageError = false;
    if (
      !data.email.trim() ||
      !VALID_EMAIL_REGEX.test(data.email.toLowerCase())
    ) {
      emailError = true;
    }
    if (!data.message.trim()) {
      messageError = true;
    }

    if (emailError || messageError) {
      setOnError({
        email: emailError,
        message: messageError,
      });

      return;
    }

    dispatchContactUs(data);
  };

  useEffect(() => {
    if (open) {
      toast(message, { type, onClose: () => dispatchToggleToast(false) });

      if (type === TOAST_TYPE.SUCCESS) {
        handleReset();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <PageHeader title="Contact Us" />
      <Box>
        <div className="box-wrapper">
          <h1 className="leading">Hello there</h1>
          <p className="sub-leading">
            We are looking forward to hearing from you. Please feel free to get
            in touch via the form below, we will get back to you as soon as
            possible. <br />
            Devsquad Rectuiting Services Ltd.
          </p>
          <div className="contact-info">
            <a className="contact-email" href="mailto:recruiting@devsquad.io">
              <i className="far fa-envelope"></i>
              recruiting@devsquad.io
            </a>
            <a className="contact-number" href="tel:+84 812 785 896">
              <i className="fas fa-phone-alt"></i>
              +84 812 785 896
            </a>
            <a
              className="contact-address"
              href="https://goo.gl/maps/uQBZMAejsLB4nicGA"
            >
              <i className="fas fa-map-marker-alt"></i>
              5A/2 Tran Phu, Ward 4, District 5, Ho Chi Minh city
            </a>
          </div>
          <h1 className="leading">Drop us a message</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <TextField
                className="form-control"
                placeholder="Enter name"
                value={data.name}
                onChange={handleDataChange('name')}
              />
            </div>
            <div className="form-group">
              <TextField
                className="form-control"
                placeholder="Enter email address"
                value={data.email}
                onChange={handleDataChange('email')}
                error={onError.email}
              />
            </div>
            <div className="form-group">
              <TextArea
                className="form-control"
                placeholder="Your message"
                value={data.message}
                onChange={handleDataChange('message')}
                error={onError.message}
              />
            </div>
            <div className="form-group">
              <Button type="submit" text="Drop message" />
            </div>
          </form>
        </div>
      </Box>
    </React.Fragment>
  );
};

Contact.propTypes = {
  open: PropTypes.bool,
  type: PropTypes.string,
  message: PropTypes.string,
  dispatchContactUs: PropTypes.func,
  dispatchToggleToast: PropTypes.func,
};

export default Contact;
