import React from 'react';

import FacebookLink from '../../FacebookLink';
import Link from '../../Link';
import LinkedinLink from '../../LinkedinLink';

import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="footer-menu">
          <Link className="footer-menu-item" id="home" to="/home">
            Home
          </Link>
          <Link className="footer-menu-item" id="about-us" to="/about-us">
            About Us
          </Link>
          <Link className="footer-menu-item" id="contact" to="/contact">
            Contact
          </Link>
          <Link className="footer-menu-item" id="blogs" to="/blogs">
            Blog
          </Link>
        </div>
        <div className="connect-link">
          <FacebookLink className="facebook" />
          <LinkedinLink className="linkedin" />
        </div>
        <div className="copy-right">{`© Copyright ${new Date().getFullYear()} DevSquad`}</div>
      </div>
    </div>
  );
};

export default Footer;
