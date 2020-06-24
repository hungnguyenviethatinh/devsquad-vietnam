import React from 'react';

import ButtonLink from '../../ButtonLink';
import FacebookLink from '../../FacebookLink';
import Link from '../../Link';
import LinkedinLink from '../../LinkedinLink';

import logo from './DevSquadVietNam.png';
import './Header.scss';

const Header = () => {
  return (
    <nav className="navbar fixed-top navbar-menu">
      <Link className="navbar-brand link-home" id="home" to="/">
        <img className="img-logo" alt="DevSquad VietNam" src={logo} />
      </Link>
      <div className="menu">
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
      <div className="action-link action-link-flex">
        <FacebookLink />
        <LinkedinLink />
        <ButtonLink className="subscribe-link">Subscribe</ButtonLink>
      </div>
    </nav>
  );
};

export default Header;
