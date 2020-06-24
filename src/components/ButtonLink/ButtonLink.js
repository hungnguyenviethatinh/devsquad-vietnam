import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './ButtonLink.scss';

const ButtonLink = (props) => {
  const { className, id, title, to, ...rest } = props;
  return (
    <Link
      role="button"
      className={clsx(className, 'btn button-link button-link-text')}
      id={id}
      title={title}
      to={to}
      {...rest}
    />
  );
};

ButtonLink.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
};

ButtonLink.defaultProps = {
  className: '',
  id: '',
  title: '',
  to: '',
};

export default ButtonLink;
