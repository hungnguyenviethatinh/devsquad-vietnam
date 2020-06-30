import Immutable from 'immutable';

import { TOGGLE_BLOCK_UI } from './actions';

const initialState = Immutable.fromJS({
  isLoading: false,
});

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_BLOCK_UI:
      return state.set('isLoading', payload.isLoading);
    default:
      return state;
  }
};
