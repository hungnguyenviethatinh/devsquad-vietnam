import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './TextArea.scss';

const TextArea = (props) => {
  const { className, id, value, placeholder, rows, onChange, ...rest } = props;
  return (
    <textarea
      className={clsx(className, 'textarea-component')}
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
  onChange: PropTypes.func,
};

TextArea.defaultProps = {
  className: '',
  id: '',
  value: '',
  placeholder: '',
  rows: 5,
  onChange: () => {},
};

export default TextArea;
