import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';

import Box from '../../components/Box';
import Button from '../../components/Button';
import PageHeader from '../../components/PageHeader';
import TextArea from '../../components/TextArea';
import TextField from '../../components/TextField';

const Contact = (props) => {
  const { message, dispatchContactUs } = props;

  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleDataChange = (prop) => (event) => {
    setData({
      ...data,
      [prop]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatchContactUs(data);
  };

  useEffect(() => {
    if (message && message === 'success') {
      toast(message, { type: 'success' });
    } else if (message) {
      toast(message, { type: 'error' });
    }
  }, [message]);

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
              />
            </div>
            <div className="form-group">
              <TextArea
                className="form-control"
                placeholder="Your message"
                value={data.message}
                onChange={handleDataChange('message')}
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
  message: PropTypes.string,
  dispatchContactUs: PropTypes.func,
};

export default Contact;
