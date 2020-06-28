import Axios from '../../core/Axios';

import {
  API_URL_LIST,
  STATUS_CODE,
  STATUS_MESSAGE,
} from '../../core/Constants';

export const CONTACT_US_SUCCESS = 'CONTACT_US_SUCCESS';
export const CONTACT_US_LOADING = 'CONTACT_US_LOADING';
export const CONTACT_US_FAILURE = 'CONTACT_US_FAILURE';

export const dispatchContactUs = ({ name, email, message }) => {
  return (dispatch) => {
    const data = {
      name,
      email,
      message,
    };

    dispatch(actionContactUsLoading(true));
    Axios.post(API_URL_LIST.CONTACT_US, data)
      .then((response) => {
        const { status, data } = response;
        if (status === STATUS_CODE.SUCCESS) {
          const { message } = data;
          if (message === STATUS_MESSAGE.SUCCESS) {
            dispatch(actionContactUsSuccess(message));
          } else {
            dispatch(actionContactUsFailure(message));
          }
        }
      })
      .catch((reason) => {
        if (reason.response && reason.response.data) {
          const { data } = reason.reason;
          dispatch(actionContactUsFailure(data.message));
        }
        dispatch(actionContactUsLoading(false));
      });
  };
};

const actionContactUsLoading = (isLoading) => ({
  type: CONTACT_US_LOADING,
  payload: {
    isLoading,
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
