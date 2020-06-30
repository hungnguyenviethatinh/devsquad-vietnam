import Axios from '../../core/Axios';

import {
  API_URL_LIST,
  STATUS_CODE,
  // STATUS_MESSAGE,
} from '../../core/Constants';

import { dispatchToggleBlockUi } from '../Layout/actions';

export const GET_BLOGS_SUCCESS = 'GET_BLOGS_SUCCESS';
export const GET_BLOGS_FAILURE = 'GET_BLOGS_FAILURE';

export const dispatchGetBlogs = (page, per_page) => {
  return (dispatch) => {
    const params = {
      page,
      per_page,
    };

    dispatch(dispatchToggleBlockUi(true));

    Axios.get(API_URL_LIST.BLOGS, { params })
      .then((response) => {
        dispatch(dispatchToggleBlockUi(false));

        const { status, data } = response;
        if (status === STATUS_CODE.SUCCESS) {
          dispatch(actionGetBlogsSuccess('', data.result, data.total_count));
          // const { message } = data;
          // if (message === STATUS_MESSAGE.SUCCESS) {
          //   dispatch(
          //     actionGetBlogsSuccess(message, data.result, data.total_count)
          //   );
          // } else {
          //   dispatch(actionGetBlogsFailure(message));
          // }
        }
      })
      .catch((reason) => {
        dispatch(dispatchToggleBlockUi(false));

        if (reason.response && reason.response.data) {
          const { data } = reason.reason;
          dispatch(actionGetBlogsFailure(data.message));
        }
      });
  };
};

const actionGetBlogsSuccess = (message, blogs, totalCount) => ({
  type: GET_BLOGS_SUCCESS,
  payload: {
    message,
    blogs,
    totalCount,
  },
});

const actionGetBlogsFailure = (message) => ({
  type: GET_BLOGS_FAILURE,
  payload: {
    message,
  },
});
