import { createSelector } from 'reselect';

const selectedState = (state) => state.get('blog');

export const getMessage = createSelector([selectedState], (blog) =>
  blog.get('message')
);

export const getBlogs = createSelector([selectedState], (blog) =>
  blog.get('blogs')
);

export const getTotalCount = createSelector([selectedState], (blog) =>
  blog.get('totalCount')
);

export const getIsLoading = createSelector([selectedState], (blog) =>
  blog.get('isLoading')
);
