import { createSelector } from 'reselect';

const subscribe = (state) => state.get('subscribe');

export const getMessage = createSelector([subscribe], (subscribe) =>
  subscribe.get('message')
);
