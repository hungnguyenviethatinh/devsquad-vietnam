import Axios from '../../core/Axios';

import {
  API_URL_LIST,
  STATUS_CODE,
  STATUS_MESSAGE,
} from '../../core/Constants';

import { dispatchToggleBlockUi } from '../Layout/actions';
import { dispatchToggleToast } from '../Contact/actions';

export const SUBSCRIBE_SUCCESS = 'SUBSCRIBE_SUCCESS';
export const SUBSCRIBE_FAILURE = 'SUBSCRIBE_FAILURE';

export const dispatchSubscribe = ({ email }) => {
  return async (dispatch) => {
    dispatch(dispatchToggleBlockUi(true));

    try {
      const model = {
        email,
      };
      const response = await Axios.post(API_URL_LIST.SUBSCRIBE, model);
      if (response) {
        dispatch(dispatchToggleBlockUi(false));
        const { status, data } = response;
        if (status === STATUS_CODE.SUCCESS) {
          const { message } = data;
          if (message === STATUS_MESSAGE.SUCCESS) {
            dispatch(actionSubscribeSuccess(message));
          } else {
            dispatch(actionSubscribeFailure(message));
          }
          dispatch(dispatchToggleToast(true));
        }
      }
    } catch (reason) {
      dispatch(dispatchToggleBlockUi(false));

      if (reason.response && reason.response.data) {
        const { data } = reason.response;
        dispatch(actionSubscribeFailure(data.message));
        dispatch(dispatchToggleToast(true));
      }
    }
  };
};

const actionSubscribeSuccess = (message) => ({
  type: SUBSCRIBE_SUCCESS,
  payload: {
    message,
  },
});

const actionSubscribeFailure = (message) => ({
  type: SUBSCRIBE_FAILURE,
  payload: {
    message,
  },
});
