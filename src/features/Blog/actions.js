import Axios from '../../core/Axios';

import { API_URL_LIST, STATUS_CODE } from '../../core/Constants';

import { dispatchToggleBlockUi } from '../Layout/actions';

import { BlogListDto } from '../../dto/BlogDto';
import { parseTotalFromContentRange } from '../../utils';

export const GET_BLOGS_SUCCESS = 'GET_BLOGS_SUCCESS';
export const GET_BLOGS_FAILURE = 'GET_BLOGS_FAILURE';

export const dispatchGetBlogs = (page, perPage) => {
  return async (dispatch) => {
    dispatch(dispatchToggleBlockUi(true));

    try {
      const params = {
        page,
        perPage,
      };
      const response = await Axios.get(API_URL_LIST.BLOGS, { params });
      if (response) {
        dispatch(dispatchToggleBlockUi(false));

        const { status, data } = response;
        if (status === STATUS_CODE.SUCCESS) {
          const total = parseTotalFromContentRange(
            response.headers['content-range']
          );
          const formattedData = {
            total_count: total,
            result: new BlogListDto(data),
          };
          dispatch(
            actionGetBlogsSuccess(
              formattedData.result,
              formattedData.total_count
            )
          );
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
