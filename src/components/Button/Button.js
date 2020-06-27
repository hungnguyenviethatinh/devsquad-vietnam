import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './Button.scss';

const Button = (props) => {
  const { id, className, text, type, onClick, ...rest } = props;

  return (
    <button
      id={id}
      type={type}
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
  onClick: PropTypes.func,
};

Button.defaultProps = {
  id: '',
  className: '',
  text: '',
  type: 'button',
  onClick: () => {},
};

export default Button;
