import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';

import './Box.scss';

const TransparentBox = ({ children, ...rest }) => (
  <Box className="bg-transparent shadow-none" {...rest}>
    {children}
  </Box>
);

TransparentBox.propTypes = {
  children: PropTypes.any.isRequired,
};

export default TransparentBox;
