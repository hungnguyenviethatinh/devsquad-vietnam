import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import BlockUi from 'react-block-ui';
import { Loader } from 'react-loaders';
import { ToastContainer, Slide } from 'react-toastify';

import Header from './Header';
import Footer from './Footer';

import 'react-block-ui/style.css';
import 'loaders.css/loaders.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './Layout.scss';

const Layout = ({ component: Component, isLoading, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <BlockUi
          tag="div"
          blocking={isLoading}
          loader={<Loader active type="ball-triangle-path" color="#2ea661" />}
        >
          <Header />
          <div className="content-wrapper">
            <div className="content">
              <Component {...matchProps} />
            </div>
            <Footer />
            <ToastContainer containerId="toastContainerId" transition={Slide} />
            ;
          </div>
        </BlockUi>
      )}
    />
  );
};

Layout.propTypes = {
  component: PropTypes.any.isRequired,
  isLoading: PropTypes.bool,
};

export default Layout;
