import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './Card.scss';

const Card = (props) => {
  const { className, image, title, author, text, ...rest } = props;

  return (
    <div className={clsx(className, 'card-component')} {...rest}>
      <img src={image} className="card-img" alt={title} />
      <div className="card-text-wrapper">
        <h3 className="card-title">{title}</h3>
        <small className="card-author">{author}</small>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  image: PropTypes.any,
  title: PropTypes.string,
  author: PropTypes.string,
  text: PropTypes.string,
};

Card.defaultProps = {
  className: '',
  image: null,
  title: '',
  author: '',
  text: '',
};

export default Card;
