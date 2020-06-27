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
        <React.Fragment>
          <Header />
          <div className="content-wrapper">
            <div className="content">
              <Component {...matchProps} />
            </div>
            <Footer />
          </div>
        </React.Fragment>
      )}
    />
  );
};

Layout.propTypes = {
  component: PropTypes.any.isRequired,
};

export default Layout;
