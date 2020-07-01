import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import Box from '../../components/Box';
import Button from '../../components/Button';
import PageHeader from '../../components/PageHeader';
import TextField from '../../components/TextField';

import { ValidEmailRegex } from '../../core/Constants';

const Subscribe = (props) => {
  const { message, dispatchSubscribe } = props;

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (event) => {
    const value = event.target.value;

    setEmailError(!value.trim());
    setEmail(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim() || !ValidEmailRegex.test(email.toLowerCase())) {
      setEmailError(true);
      return;
    }

    dispatchSubscribe({ email });
  };

  useEffect(() => {
    if (message && message === 'success') {
      toast(message, { type: 'success' });
      setEmail('');
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
                error={emailError}
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
