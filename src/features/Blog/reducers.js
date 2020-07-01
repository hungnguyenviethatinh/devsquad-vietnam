import Immutable from 'immutable';

import { GET_BLOGS_SUCCESS, GET_BLOGS_FAILURE } from './actions';

const initialState = Immutable.fromJS({
  message: '',
  blogs: [],
  totalCount: 0,
});

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_BLOGS_SUCCESS:
      return state
        .set('blogs', payload.blogs)
        .set('totalCount', payload.totalCount);
    case GET_BLOGS_FAILURE:
      return state.set('message', payload.message);
    default:
      return state;
  }
};
