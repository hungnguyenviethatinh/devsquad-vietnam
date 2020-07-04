import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Link from '../Link';
import './Card.scss';

const Card = (props) => {
  const { className, image, title, author, text, linkHref, ...rest } = props;

  return (
    <div className={clsx(className, 'card-component')} {...rest}>
      <Link title={title} to={linkHref}>
        <img src={image} className="card-img" alt={title} />
      </Link>
      <div className="card-text-wrapper">
        <Link className="card-title" title={title} to={linkHref}>
          {title}
        </Link>
        <br />
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
  linkHref: PropTypes.string,
};

Card.defaultProps = {
  className: '',
  image: null,
  title: '',
  author: '',
  text: '',
  linkHref: '',
};

export default Card;
