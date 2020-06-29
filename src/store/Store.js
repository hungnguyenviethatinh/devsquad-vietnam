import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer, { initialState } from './RootReducer';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV === 'development') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

const store = createStore(
  rootReducer,
  initialState,
  bindMiddleware([thunkMiddleware])
);

export default store;
