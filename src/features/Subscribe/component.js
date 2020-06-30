import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import Box from '../../components/Box';
import Button from '../../components/Button';
import PageHeader from '../../components/PageHeader';
import TextField from '../../components/TextField';

const Subscribe = (props) => {
  const { message, dispatchSubscribe } = props;

  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatchSubscribe({ email });
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
      <PageHeader title="Subscribe" />
      <Box>
        <div className="box-wrapper">
          <h1 className="leading">Enter some text here please</h1>
          <p className="sub-leading">Enter some text here please</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <TextField
                className="form-control"
                placeholder="Enter email address"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-group">
              <Button type="submit" text="Subscribe now" />
            </div>
          </form>
        </div>
      </Box>
    </React.Fragment>
  );
};

Subscribe.propTypes = {
  message: PropTypes.string,
  dispatchSubscribe: PropTypes.func,
};

export default Subscribe;
