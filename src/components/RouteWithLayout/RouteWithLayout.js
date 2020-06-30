import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../features/Layout';

const RouteWithLayout = ({ component: Component, ...rest }) => {
  return (
    <Layout
      {...rest}
      component={(matchProps) => <Component {...matchProps} />}
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
};

export default RouteWithLayout;
