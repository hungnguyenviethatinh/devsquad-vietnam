import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import './Layout.scss';

const Layout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <div>
          <Header />
          <Component {...matchProps} />
          <Footer />
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  component: PropTypes.any.isRequired,
};

export default Layout;
