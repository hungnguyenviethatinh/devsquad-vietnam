import Axios from '../../core/Axios';

import {
  API_URL_LIST,
  STATUS_CODE,
  STATUS_MESSAGE,
} from '../../core/Constants';

export const SUBSCRIBE_SUCCESS = 'SUBSCRIBE_SUCCESS';
export const SUBSCRIBE_FAILURE = 'SUBSCRIBE_FAILURE';
export const SUBSCRIBE_LOADING = 'SUBSCRIBE_FAILURE';

export const dispatchSubscribe = ({ email }) => {
  return (dispatch) => {
    const data = {
      email,
    };
    dispatch(actionSubscribeLoading(true));
    Axios.post(API_URL_LIST.SUBSCRIBE, data)
      .then((response) => {
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
        if (reason.response && reason.response.data) {
          const { data } = reason.reason;
          dispatch(actionSubscribeFailure(data.message));
        }
        dispatch(actionSubscribeLoading(false));
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

const actionSubscribeLoading = (isLoading) => ({
  type: SUBSCRIBE_LOADING,
  payload: {
    isLoading,
  },
});
