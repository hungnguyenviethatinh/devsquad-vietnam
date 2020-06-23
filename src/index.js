import '@babel/polyfill';

import 'bootstrap/scss/bootstrap.scss';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import './styles/index.scss';

import 'jquery/dist/jquery.slim.js';
import 'popper.js/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import '@fortawesome/fontawesome-free/js/all.js';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  root
);
