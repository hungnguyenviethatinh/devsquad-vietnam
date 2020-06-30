import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';

import common from '../features/Layout/reducers';
import blog from '../features/Blog/reducers';
import blogPost from '../features/BlogPost/reducers';
import contact from '../features/Contact/reducers';
import subscribe from '../features/Subscribe/reducers';

export const initialState = Immutable.Map();

const appReducer = combineReducers({
  common,
  blog,
  blogPost,
  contact,
  subscribe,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
