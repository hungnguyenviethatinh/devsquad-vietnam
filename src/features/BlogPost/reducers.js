import Immutable from 'immutable';

import { GET_BLOG_SUCCESS, GET_BLOG_FAILURE } from './actions';

const initialState = Immutable.fromJS({
  message: '',
  blog: {},
});

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_BLOG_SUCCESS:
      return state.set('message', payload.message).set('blog', payload.blog);
    case GET_BLOG_FAILURE:
      return state.set('message', payload.message);
    default:
      return state;
  }
};
