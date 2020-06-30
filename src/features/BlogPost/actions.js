import Axios from '../../core/Axios';

import {
  API_URL_LIST,
  STATUS_CODE,
  STATUS_MESSAGE,
} from '../../core/Constants';

import { dispatchToggleBlockUi } from '../Layout/actions';

export const GET_BLOG_SUCCESS = 'GET_BLOG_SUCCESS';
export const GET_BLOG_FAILURE = 'GET_BLOG_FAILURE';

export const dispatchGetBlog = (id) => {
  return (dispatch) => {
    const url = `${API_URL_LIST}/${id}`;

    dispatch(dispatchToggleBlockUi(true));

    Axios.get(url)
      .then((response) => {
        dispatch(dispatchToggleBlockUi(false));

        const { status, data } = response;
        if (status === STATUS_CODE.SUCCESS) {
          const { message } = data;
          if (message === STATUS_MESSAGE.SUCCESS) {
            dispatch(actionGetBlogSuccess(message, data.blog));
          } else {
            dispatch(actionGetBlogFailure(message));
          }
        }
      })
      .catch((reason) => {
        dispatch(dispatchToggleBlockUi(false));

        if (reason.response && reason.response.data) {
          const { data } = reason.reason;
          dispatch(actionGetBlogFailure(data.message));
        }
      });
  };
};

const actionGetBlogSuccess = (message, blog) => ({
  type: GET_BLOG_SUCCESS,
  payload: {
    message,
    blog,
  },
});

const actionGetBlogFailure = (message) => ({
  type: GET_BLOG_FAILURE,
  payload: {
    message,
  },
});
