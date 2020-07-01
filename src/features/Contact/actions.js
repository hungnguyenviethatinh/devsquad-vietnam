import Axios from '../../core/Axios';

import {
  API_URL_LIST,
  STATUS_CODE,
  STATUS_MESSAGE,
} from '../../core/Constants';

import { dispatchToggleBlockUi } from '../Layout/actions';

export const CONTACT_US_SUCCESS = 'CONTACT_US_SUCCESS';
export const CONTACT_US_FAILURE = 'CONTACT_US_FAILURE';
export const TOGGLE_TOAST = 'TOGGLE_TOAST';

export const dispatchContactUs = ({ name, email, message }) => {
  return (dispatch) => {
    const data = {
      name,
      email,
      message,
    };

    dispatch(dispatchToggleBlockUi(true));

    Axios.post(API_URL_LIST.CONTACT_US, data)
      .then((response) => {
        dispatch(dispatchToggleBlockUi(false));

        const { status, data } = response;
        if (status === STATUS_CODE.SUCCESS) {
          const { message } = data;
          if (message === STATUS_MESSAGE.SUCCESS) {
            dispatch(actionContactUsSuccess(message));
          } else {
            dispatch(actionContactUsFailure(message));
          }
          dispatch(dispatchToggleToast(true));
        }
      })
      .catch((reason) => {
        dispatch(dispatchToggleBlockUi(false));
        if (reason.response && reason.response.data) {
          const { data } = reason.reason;
          dispatch(actionContactUsFailure(data.message));
          dispatch(dispatchToggleToast(true));
        }
      });
  };
};

export const dispatchToggleToast = (open) => ({
  type: TOGGLE_TOAST,
  payload: {
    open,
  },
});

const actionContactUsSuccess = (message) => ({
  type: CONTACT_US_SUCCESS,
  payload: {
    message,
  },
});

const actionContactUsFailure = (message) => ({
  type: CONTACT_US_FAILURE,
  payload: {
    message,
  },
});
