import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import './FacebookLink.scss';

const FacebookLink = (props) => {
  const { className, color } = props;

  return (
    <a
      className={clsx(className, 'facebook-link-text')}
      href="/"
      target="_blank"
    >
      <i
        style={{
          color,
        }}
        className="fab fa-facebook-f"
        aria-hidden="true"
      ></i>
    </a>
  );
};

FacebookLink.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['#828282', '#4F4F4F']),
};

FacebookLink.defaultProps = {
  className: '',
  color: '#828282',
};

export default FacebookLink;
