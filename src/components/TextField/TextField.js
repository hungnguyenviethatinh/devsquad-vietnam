import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './TextField.scss';

const TextField = (props) => {
  const {
    className,
    id,
    type,
    name,
    value,
    placeholder,
    onChange,
    error,
    ...rest
  } = props;

  return (
    <input
      className={clsx({
        [className]: true,
        ['input-component']: true,
        ['error']: error,
      })}
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      {...rest}
    />
  );
};

TextField.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool,
};

TextField.defaultProps = {
  className: '',
  id: '',
  type: 'text',
  name: '',
  value: '',
  placeholder: '',
  error: false,
  onChange: () => {},
};

export default TextField;
