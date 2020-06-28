import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';

import contact from '../features/Contact/reducers';
import subscribe from '../features/Subscribe/reducers';

export const initialState = Immutable.Map();

const appReducer = combineReducers({
  contact,
  subscribe,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
