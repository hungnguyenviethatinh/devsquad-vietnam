import Axios from '../../core/Axios';

import { API_URL_LIST, STATUS_CODE } from '../../core/Constants';

import { dispatchToggleBlockUi } from '../Layout/actions';

import { BlogDto } from '../../dto/BlogDto';

export const GET_BLOG_SUCCESS = 'GET_BLOG_SUCCESS';
export const GET_BLOG_FAILURE = 'GET_BLOG_FAILURE';

export const dispatchGetBlog = (id) => {
  return async (dispatch) => {
    const url = `${API_URL_LIST.BLOG}/${id}`;

    dispatch(dispatchToggleBlockUi(true));

    try {
      const response = await Axios.get(url);
      if (response) {
        dispatch(dispatchToggleBlockUi(false));

        const { status, data } = response;
        if (status === STATUS_CODE.SUCCESS) {
          dispatch(actionGetBlogSuccess(new BlogDto(data)));
        }
      }
    } catch (reason) {
      dispatch(dispatchToggleBlockUi(false));

      if (reason.response && reason.response.data) {
        const { data } = reason.response;
        dispatch(actionGetBlogFailure(data.message));
      }
    }
  };
};

const actionGetBlogSuccess = (blog) => ({
  type: GET_BLOG_SUCCESS,
  payload: {
    blog,
  },
});

const actionGetBlogFailure = (message) => ({
  type: GET_BLOG_FAILURE,
  payload: {
    message,
  },
});
