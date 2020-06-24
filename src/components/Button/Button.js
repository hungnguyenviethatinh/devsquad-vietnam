import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './Button.scss';

const Button = (props) => {
  const { className, text, onClick } = props;

  return (
    <button
      className={clsx(className, 'btn button button-text')}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  text: '',
  onClick: () => {},
};

export default Button;
