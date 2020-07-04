import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './ButtonLink.scss';

const ButtonLink = (props) => {
  const { className, id, title, to, children, onClick, ...rest } = props;
  return (
    <Link
      role="button"
      className={clsx(className, 'btn button-link button-link-text')}
      id={id}
      title={title}
      to={to}
      onClick={onClick}
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
  onClick: PropTypes.func,
};

ButtonLink.defaultProps = {
  className: '',
  id: '',
  title: '',
  to: '',
  children: null,
  onClick: () => {},
};

export default ButtonLink;
