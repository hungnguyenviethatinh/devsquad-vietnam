import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './Box.scss';

const Box = (props) => {
  const { className, children } = props;

  return <div className={clsx(className, 'box-component')}>{children}</div>;
};

Box.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
};

Box.defaultProps = {
  className: '',
  children: null,
};

export default Box;
