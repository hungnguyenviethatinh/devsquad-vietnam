import React from 'react';

import Box from '../../components/Box';
import Button from '../../components/Button';
import PageHeader from '../../components/PageHeader';
import TextArea from '../../components/TextArea';
import TextField from '../../components/TextField';

const Contact = () => {
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
          <form>
            <div className="form-group">
              <TextField className="form-control" placeholder="Enter name" />
            </div>
            <div className="form-group">
              <TextField
                className="form-control"
                placeholder="Enter email address"
              />
            </div>
            <div className="form-group">
              <TextArea className="form-control" placeholder="Your message" />
            </div>
            <div className="form-group">
              <Button text="Drop message" />
            </div>
          </form>
        </div>
      </Box>
    </React.Fragment>
  );
};

export default Contact;