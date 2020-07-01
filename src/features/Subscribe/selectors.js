import { createSelector } from 'reselect';

const selectedState = (state) => state.get('subscribe');

export const getMessage = createSelector([selectedState], (subscribe) =>
  subscribe.get('message')
);

export const getType = createSelector([selectedState], (subscribe) =>
  subscribe.get('type')
);

export const getOpen = createSelector([selectedState], (subscribe) =>
  subscribe.get('open')
);
