import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './Link.scss';

const Link = (props) => {
  const {
    activeClassName,
    activeStyle,
    children,
    className,
    exact,
    id,
    title,
    to,
    ...rest
  } = props;

  return (
    <NavLink
      exact={exact}
      activeClassName={clsx(activeClassName, 'link-active')}
      activeStyle={activeStyle}
      className={clsx(className, 'link-text')}
      id={id}
      title={title}
      to={to}
      {...rest}
    >
      {children}
    </NavLink>
  );
};

Link.propTypes = {
  exact: PropTypes.bool,
  activeClassName: PropTypes.string,
  activeStyle: PropTypes.object,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
};

Link.defaultProps = {
  exact: true,
  activeClassName: '',
  activeStyle: null,
  children: null,
  className: '',
  id: '',
  title: '',
  to: '',
};

export default Link;
