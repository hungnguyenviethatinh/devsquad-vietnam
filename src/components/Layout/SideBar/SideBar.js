import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import ButtonLink from '../../ButtonLink';
import FacebookLink from '../../FacebookLink';
import Link from '../../Link';
import LinkedinLink from '../../LinkedinLink';

import logo from '../Header/DevSquadVietNam.png';
import './SideBar.scss';

const SideBar = (props) => {
  const { open, onClose } = props;

  return (
    <div
      className={clsx({
        ['sidebar-component']: true,
        ['open']: open,
      })}
    >
      <nav className="navbar navbar-menu navbar-expand-lg navbar-light">
        <Link
          className="navbar-brand link-home"
          id="home"
          to="/"
          onClick={onClose}
        >
          <img className="img-logo" alt="DevSquad VietNam" src={logo} />
        </Link>
        <button
          type="button"
          className="btn-close close"
          aria-label="Close"
          onClick={onClose}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </nav>
      <div className="menu">
        <Link
          className="menu-item"
          id="about-us"
          to="/about-us"
          onClick={onClose}
        >
          About Us
        </Link>
        <Link
          className="menu-item"
          id="contact"
          to="/contact"
          onClick={onClose}
        >
          Contact
        </Link>
        <Link className="menu-item" id="blogs" to="/blogs" onClick={onClose}>
          Blog
        </Link>
      </div>
      <div className="action-link action-link-flex">
        <div className="share-icon-wrapper">
          <FacebookLink />
          <LinkedinLink />
        </div>
        <ButtonLink
          className="subscribe-link"
          to="/subscribe"
          onClick={onClose}
        >
          Subscribe
        </ButtonLink>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

SideBar.defaultProps = {
  open: false,
  onClose: () => {},
};

export default SideBar;
