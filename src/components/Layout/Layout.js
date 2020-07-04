import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import BlockUi from 'react-block-ui';
import { Loader } from 'react-loaders';
import { ToastContainer, Slide } from 'react-toastify';

import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';

import 'react-block-ui/style.css';
import 'loaders.css/loaders.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './Layout.scss';

const Layout = ({
  component: Component,
  isLoading,
  open,
  dispatchToggleSideBar,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <BlockUi
          tag="div"
          blocking={isLoading}
          loader={<Loader active type="ball-triangle-path" color="#2ea661" />}
        >
          <Header open={!open} onOpen={() => dispatchToggleSideBar(true)} />
          <div className="content-wrapper">
            <SideBar open={open} onClose={() => dispatchToggleSideBar(false)} />
            <div className="content">
              <Component {...matchProps} />
            </div>
            <Footer />
            <ToastContainer containerId="toastContainerId" autoClose={1500} transition={Slide} />
          </div>
        </BlockUi>
      )}
    />
  );
};

Layout.propTypes = {
  component: PropTypes.any.isRequired,
  isLoading: PropTypes.bool,
  open: PropTypes.bool,
  dispatchToggleSideBar: PropTypes.func,
};

export default Layout;
