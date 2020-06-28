import Immutable from 'immutable';

import {
  CONTACT_US_LOADING,
  CONTACT_US_SUCCESS,
  CONTACT_US_FAILURE,
} from './actions';

const initialState = Immutable.fromJS({
  isLoading: false,
  message: '',
});

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CONTACT_US_LOADING:
      return state.set('isLoading', payload.isLoading);
    case CONTACT_US_SUCCESS:
      return state.set('message', payload.message).set('isLoading', false);
    case CONTACT_US_FAILURE:
      return state.set('message', payload.message).set('isLoading', false);
    default:
      return state;
  }
};
