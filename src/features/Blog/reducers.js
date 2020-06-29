import Immutable from 'immutable';

import {
  GET_BLOGS_SUCCESS,
  GET_BLOGS_FAILURE,
  GET_BLOGS_LOADING,
} from './actions';

const initialState = Immutable.fromJS({
  isLoading: false,
  message: '',
  blogs: [],
  totalCount: 0,
});

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_BLOGS_SUCCESS:
      return state
        .set('isLoading', false)
        .set('message', payload.message)
        .set('blogs', payload.blogs)
        .set('totalCount', payload.totalCount);
    case GET_BLOGS_FAILURE:
      return state.set('isLoading', false).set('message', payload.message);
    case GET_BLOGS_LOADING:
      return state.set('isLoading', payload.isLoading);
    default:
      return state;
  }
};
