import Immutable from 'immutable';

import { SUBSCRIBE_FAILURE, SUBSCRIBE_SUCCESS } from './actions';

const initialState = Immutable.fromJS({
  message: '',
});

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SUBSCRIBE_SUCCESS:
      return state.set('message', payload.message);
    case SUBSCRIBE_FAILURE:
      return state.set('message', payload.message);
    default:
      return state;
  }
};
