import React from 'react';

import Box from '../../components/Box';
import Button from '../../components/Button';
import PageHeader from '../../components/PageHeader';
import TextField from '../../components/TextField';

const Subscribe = () => {
  return (
    <React.Fragment>
      <PageHeader title="Subscribe" />
      <Box>
        <div className="box-wrapper">
          <h1 className="leading">Enter some text here please</h1>
          <p className="sub-leading">Enter some text here please</p>
          <form>
            <div className="form-group">
              <TextField
                className="form-control"
                placeholder="Enter email address"
              />
            </div>
            <div className="form-group">
              <Button text="Subscribe now" />
            </div>
          </form>
        </div>
      </Box>
    </React.Fragment>
  );
};

export default Subscribe;
