import Axios from '../../core/Axios';

import { API_URL_LIST, STATUS_CODE } from '../../core/Constants';

import { dispatchToggleBlockUi } from '../Layout/actions';

export const GET_BLOGS_SUCCESS = 'GET_BLOGS_SUCCESS';
export const GET_BLOGS_FAILURE = 'GET_BLOGS_FAILURE';

export const dispatchGetBlogs = (page, per_page) => {
  return async (dispatch) => {
    dispatch(dispatchToggleBlockUi(true));

    try {
      const params = {
        page,
        per_page,
      };
      const response = await Axios.get(API_URL_LIST.BLOGS, { params });
      if (response) {
        dispatch(dispatchToggleBlockUi(false));
        const { status, data } = response;
        if (status === STATUS_CODE.SUCCESS) {
          dispatch(actionGetBlogsSuccess(data.result, data.total_count));
        }
      }
    } catch (reason) {
      dispatch(dispatchToggleBlockUi(false));

      if (reason.response && reason.response.data) {
        const { data } = reason.response;
        dispatch(actionGetBlogsFailure(data.message));
      }
    }
  };
};

const actionGetBlogsSuccess = (blogs, totalCount) => ({
  type: GET_BLOGS_SUCCESS,
  payload: {
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
