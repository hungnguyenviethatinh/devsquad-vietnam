import Immutable from 'immutable';

import { TOAST_TYPE } from '../../core/Constants';

import {
  CONTACT_US_SUCCESS,
  CONTACT_US_FAILURE,
  TOGGLE_TOAST,
} from './actions';

const initialState = Immutable.fromJS({
  open: false,
  type: TOAST_TYPE.DEFAULT,
  message: '',
});

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CONTACT_US_SUCCESS:
      return state
        .set('type', TOAST_TYPE.SUCCESS)
        .set('message', payload.message);
    case CONTACT_US_FAILURE:
      return state
        .set('type', TOAST_TYPE.ERROR)
        .set('message', payload.message);
    case TOGGLE_TOAST:
      return state.set('open', payload.open);
    default:
      return state;
  }
};
