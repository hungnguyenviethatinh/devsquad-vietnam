import React from 'react';

import Box from '../../components/Box';
import PageHeader from '../../components/PageHeader';
import FacebookLink from '../../components/FacebookLink';
import LinkedinLink from '../../components/LinkedinLink';

import { ABOUT_US as aboutUs } from '../../utils/AppData';

const AboutUs = () => {
  return (
    <React.Fragment>
      <PageHeader title="About Us" />
      <Box>
        <div className="box-wrapper">
          {aboutUs.map((item, index) => (
            <React.Fragment key={index}>
              <h1 className="leading">{item.title}</h1>
              <p className="text">{item.text}</p>
            </React.Fragment>
          ))}
          <div className="connect-us">
            <FacebookLink />
            <LinkedinLink />
          </div>
        </div>
      </Box>
    </React.Fragment>
  );
};

export default AboutUs;
