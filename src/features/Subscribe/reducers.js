import Immutable from 'immutable';

import {
  SUBSCRIBE_FAILURE,
  SUBSCRIBE_LOADING,
  SUBSCRIBE_SUCCESS,
} from './actions';

const initialState = Immutable.fromJS({
  isLoading: false,
  message: '',
});

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SUBSCRIBE_LOADING:
      return state.set('isLoading', payload.isLoading);
    case SUBSCRIBE_SUCCESS:
      return state.set('isLoading', false).set('message', payload.message);
    case SUBSCRIBE_FAILURE:
      return state.set('isLoading', false).set('message', payload.message);
    default:
      return state;
  }
};
