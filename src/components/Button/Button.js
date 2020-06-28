import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './Button.scss';

const Button = (props) => {
  const { id, className, text, type, disabled, onClick, ...rest } = props;

  return (
    <button
      id={id}
      type={type}
      disabled={disabled}
      className={clsx(className, 'btn button-component button-component-text')}
      onClick={onClick}
      {...rest}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  id: '',
  className: '',
  text: '',
  type: 'button',
  disabled: false,
  onClick: () => {},
};

export default Button;
