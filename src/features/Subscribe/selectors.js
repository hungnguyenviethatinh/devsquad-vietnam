import { createSelector } from 'reselect';

const subscribe = (state) => state.get('subscribe');

export const getMessage = createSelector([subscribe], (subscribe) =>
  subscribe.get('message')
);

export const getIsLoading = createSelector([subscribe], (subscribe) =>
  subscribe.get('isLoading')
);
