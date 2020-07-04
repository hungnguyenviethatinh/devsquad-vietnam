import Immutable from 'immutable';

import { TOGGLE_BLOCK_UI, TOGGLE_SIDEBAR } from './actions';

const initialState = Immutable.fromJS({
  isLoading: false,
  open: false,
});

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_BLOCK_UI:
      return state.set('isLoading', payload.isLoading);
    case TOGGLE_SIDEBAR:
      return state.set('open', payload.open);
    default:
      return state;
  }
};
