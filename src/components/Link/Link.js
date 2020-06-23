import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './Link.scss';

const Link = (props) => {
  const { className, id, title, to, ...rest } = props;

  return (
    <RouterLink
      className={clsx(className, 'link-text')}
      id={id}
      title={title}
      to={to}
      {...rest}
    />
  );
};

Link.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
};

Link.defaultProps = {
  className: '',
  id: '',
  title: '',
  to: '',
};

export default Link;
