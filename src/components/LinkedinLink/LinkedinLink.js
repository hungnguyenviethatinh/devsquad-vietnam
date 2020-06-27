import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import './LinkedinLink.scss';

const LinkedinLink = (props) => {
  const { className, color } = props;

  return (
    <div className="linkedin-link-component">
      <a
        className={clsx(className, 'linkedin-link-text')}
        href="/"
        target="_blank"
      >
        <i
          style={{
            color,
          }}
          className="fab fa-linkedin-in"
          aria-hidden="true"
        ></i>
      </a>
    </div>
  );
};

LinkedinLink.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['#828282', '#4F4F4F']),
};

LinkedinLink.defaultProps = {
  className: '',
  color: '#828282',
};

export default LinkedinLink;
