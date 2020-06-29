import { createSelector } from 'reselect';

const selectedState = (state) => state.get('blogPost');

export const getMessage = createSelector([selectedState], (blogPost) =>
  blogPost.get('message')
);

export const getBlog = createSelector([selectedState], (blogPost) =>
  blogPost.get('blog')
);

export const getIsLoading = createSelector([selectedState], (blogPost) =>
  blogPost.get('isLoading')
);
