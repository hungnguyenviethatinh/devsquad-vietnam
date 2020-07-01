import Immutable from 'immutable';

import { TOAST_TYPE } from '../../core/Constants';

import { SUBSCRIBE_FAILURE, SUBSCRIBE_SUCCESS } from './actions';
import { TOGGLE_TOAST } from '../Contact/actions';

const initialState = Immutable.fromJS({
  open: false,
  type: TOAST_TYPE.DEFAULT,
  message: '',
});

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SUBSCRIBE_SUCCESS:
      return state
        .set('type', TOAST_TYPE.SUCCESS)
        .set('message', payload.message);
    case SUBSCRIBE_FAILURE:
      return state
        .set('type', TOAST_TYPE.ERROR)
        .set('message', payload.message);
    case TOGGLE_TOAST:
      return state.set('open', payload.open);
    default:
      return state;
  }
};
