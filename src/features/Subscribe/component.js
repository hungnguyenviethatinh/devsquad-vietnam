import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import Box from '../../components/Box';
import Button from '../../components/Button';
import PageHeader from '../../components/PageHeader';
import TextField from '../../components/TextField';

import { TOAST_TYPE, VALID_EMAIL_REGEX } from '../../core/Constants';

const Subscribe = (props) => {
  const { open, type, message, dispatchSubscribe, dispatchToggleToast } = props;

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (event) => {
    const value = event.target.value;

    setEmailError(!value.trim());
    setEmail(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim() || !VALID_EMAIL_REGEX.test(email.toLowerCase())) {
      setEmailError(true);
      return;
    }

    dispatchSubscribe({ email });
  };

  useEffect(() => {
    if (open) {
      toast(message, { type, onClose: () => dispatchToggleToast(false) });

      if (type === TOAST_TYPE.SUCCESS) {
        setEmail('');
      }
    }
  }, [open]);

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
  open: PropTypes.bool,
  type: PropTypes.string,
  message: PropTypes.string,
  dispatchSubscribe: PropTypes.func,
  dispatchToggleToast: PropTypes.func,
};

export default Subscribe;
