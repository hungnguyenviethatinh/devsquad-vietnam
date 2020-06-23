import React from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import RouteWithLayout from './components/RouteWithLayout';
import routes from './Routes';

import './styles/App.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <RouteWithLayout key={index} {...route} />
        ))}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
