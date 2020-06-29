import Immutable from 'immutable';

import {
  GET_BLOG_SUCCESS,
  GET_BLOG_FAILURE,
  GET_BLOG_LOADING,
} from './actions';

const initialState = Immutable.fromJS({
  isLoading: false,
  message: '',
  blog: {},
});

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_BLOG_SUCCESS:
      return state
        .set('isLoading', false)
        .set('message', payload.message)
        .set('blog', payload.blog);
    case GET_BLOG_FAILURE:
      return state.set('isLoading', false).set('message', payload.message);
    case GET_BLOG_LOADING:
      return state.set('isLoading', payload.isLoading);
    default:
      return state;
  }
};
