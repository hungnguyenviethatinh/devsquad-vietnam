import Immutable from 'immutable';

import { CONTACT_US_SUCCESS, CONTACT_US_FAILURE } from './actions';

const initialState = Immutable.fromJS({
  message: '',
});

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CONTACT_US_SUCCESS:
      return state.set('message', payload.message);
    case CONTACT_US_FAILURE:
      return state.set('message', payload.message);
    default:
      return state;
  }
};
