import { createSelector } from 'reselect';

const selectedState = (state) => state.get('common');

export const getIsLoading = createSelector([selectedState], (common) =>
  common.get('isLoading')
);
