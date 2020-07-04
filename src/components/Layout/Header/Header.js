import React from 'react';
import PropTypes from 'prop-types';

import ButtonLink from '../../ButtonLink';
import FacebookLink from '../../FacebookLink';
import Link from '../../Link';
import LinkedinLink from '../../LinkedinLink';

import logo from './DevSquadVietNam.png';
import './Header.scss';

const Header = (props) => {
  const { open, onOpen } = props;

  return (
    <React.Fragment>
      {open && (
        <nav className="navbar navbar-menu navbar-expand-lg navbar-light fixed-top ">
          <Link className="navbar-brand link-home" id="home" to="/">
            <img className="img-logo" alt="DevSquad VietNam" src={logo} />
          </Link>
          <button
            className="btn-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={onOpen}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="menu d-none d-lg-flex">
            <Link className="menu-item" id="about-us" to="/about-us">
              About Us
            </Link>
            <Link className="menu-item" id="contact" to="/contact">
              Contact
            </Link>
            <Link className="menu-item" id="blogs" to="/blogs">
              Blog
            </Link>
          </div>
          <div className="action-link action-link-flex d-none d-lg-flex">
            <div className="share-icon-wrapper">
              <FacebookLink />
              <LinkedinLink />
            </div>
            <ButtonLink className="subscribe-link" to="/subscribe">
              Subscribe
            </ButtonLink>
          </div>
        </nav>
      )}
    </React.Fragment>
  );
};

Header.propTypes = {
  open: PropTypes.bool,
  onOpen: PropTypes.func,
};

export default Header;
