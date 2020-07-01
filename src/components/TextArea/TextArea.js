import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './TextArea.scss';

const TextArea = (props) => {
  const {
    className,
    id,
    value,
    placeholder,
    rows,
    onChange,
    error,
    ...rest
  } = props;
  return (
    <textarea
      className={clsx({
        [className]: true,
        ['textarea-component']: true,
        error: error,
      })}
      id={id}
      value={value}
      placeholder={placeholder}
      rows={rows}
      onChange={onChange}
      {...rest}
    />
  );
};

TextArea.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  error: PropTypes.bool,
  onChange: PropTypes.func,
};

TextArea.defaultProps = {
  className: '',
  id: '',
  value: '',
  placeholder: '',
  rows: 5,
  error: false,
  onChange: () => {},
};

export default TextArea;
