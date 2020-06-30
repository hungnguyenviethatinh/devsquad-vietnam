import Axios from '../../core/Axios';

import {
  API_URL_LIST,
  STATUS_CODE,
  STATUS_MESSAGE,
} from '../../core/Constants';

import { dispatchToggleBlockUi } from '../Layout/actions';

export const SUBSCRIBE_SUCCESS = 'SUBSCRIBE_SUCCESS';
export const SUBSCRIBE_FAILURE = 'SUBSCRIBE_FAILURE';

export const dispatchSubscribe = ({ email }) => {
  return (dispatch) => {
    const data = {
      email,
    };
    dispatch(dispatchToggleBlockUi(true));

    Axios.post(API_URL_LIST.SUBSCRIBE, data)
      .then((response) => {
        dispatch(dispatchToggleBlockUi(false));

        const { status, data } = response;
        if (status === STATUS_CODE.SUCCESS) {
          const { message } = data;
          if (message === STATUS_MESSAGE.SUCCESS) {
            dispatch(actionSubscribeSuccess(message));
          } else {
            dispatch(actionSubscribeFailure(message));
          }
        }
      })
      .catch((reason) => {
        dispatch(dispatchToggleBlockUi(false));

        if (reason.response && reason.response.data) {
          const { data } = reason.reason;
          dispatch(actionSubscribeFailure(data.message));
        }
      });
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
