import React from 'react';

import FacebookLink from '../../FacebookLink';
import Link from '../../Link';
import LinkedinLink from '../../LinkedinLink';

import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="site-map">
          <Link className="site-map-link" id="home" to="/">
            Home
          </Link>
          <Link className="site-map-link" id="about-us" to="/about-us">
            About Us
          </Link>
          <Link className="site-map-link" id="contact" to="/contact">
            Contact
          </Link>
          <Link className="site-map-link" id="blogs" to="/blogs">
            Blog
          </Link>
        </div>
        <div className="connect-us">
          <FacebookLink className="facebook-link" color="#4F4F4F" />
          <LinkedinLink className="linkedin-link" color="#4F4F4F" />
        </div>
        <div className="copy-right">{`© Copyright ${currentYear} DevSquad`}</div>
      </div>
    </div>
  );
};

export default Footer;
