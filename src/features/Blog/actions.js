import Axios from '../../core/Axios';

import {
  API_URL_LIST,
  STATUS_CODE,
  STATUS_MESSAGE,
} from '../../core/Constants';

export const GET_BLOGS_SUCCESS = 'GET_BLOGS_SUCCESS';
export const GET_BLOGS_FAILURE = 'GET_BLOGS_FAILURE';
export const GET_BLOGS_LOADING = 'GET_BLOGS_LOADING';

export const dispatchGetBlogs = (page, pageSize) => {
  return (dispatch) => {
    const params = {
      page,
      pageSize,
    };

    dispatch(actionGetBlogsLoading(true));
    Axios.get(API_URL_LIST.BLOGS, { params })
      .then((response) => {
        const { status, data } = response;
        if (status === STATUS_CODE.SUCCESS) {
          const { message } = data;
          if (message === STATUS_MESSAGE.SUCCESS) {
            dispatch(
              actionGetBlogsSuccess(message, data.blogs, data.totalCount)
            );
          } else {
            dispatch(actionGetBlogsFailure(message));
          }
        }
      })
      .catch((reason) => {
        if (reason.response && reason.response.data) {
          const { data } = reason.reason;
          dispatch(actionGetBlogsFailure(data.message));
        }
        dispatch(actionGetBlogsLoading(false));
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

const actionGetBlogsLoading = (isLoading) => ({
  type: GET_BLOGS_LOADING,
  payload: {
    isLoading,
  },
});
