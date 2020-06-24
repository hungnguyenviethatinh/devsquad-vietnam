import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './Aim.scss';

const Aim = (props) => {
  const { className, image, title, text } = props;

  return (
    <div className={clsx(className, 'aim')}>
      <div className="aim-img-wrapper">
        <img className="aim-img" src={image} alt={title} />
      </div>
      <div>
        <h3 className="aim-title">{title}</h3>
        <p className="aim-text">{text}</p>
      </div>
    </div>
  );
};

Aim.propTypes = {
  className: PropTypes.string,
  image: PropTypes.any,
  title: PropTypes.string,
  text: PropTypes.string,
};

Aim.defaultProps = {
  className: '',
  image: null,
  title: '',
  text: '',
};

export default Aim;
