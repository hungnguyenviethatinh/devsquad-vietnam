import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './ButtonLink.scss';

const ButtonLink = (props) => {
  const { className, id, title, to, children, ...rest } = props;
  return (
    <Link
      role="button"
      className={clsx(className, 'btn button-link button-link-text')}
      id={id}
      title={title}
      to={to}
      {...rest}
    >
      {children}
    </Link>
  );
};

ButtonLink.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.any.isRequired,
};

ButtonLink.defaultProps = {
  className: '',
  id: '',
  title: '',
  to: '',
  children: null,
};

export default ButtonLink;
