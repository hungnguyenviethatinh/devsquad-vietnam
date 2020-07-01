import { createSelector } from 'reselect';

const selectedState = (state) => state.get('contact');

export const getMessage = createSelector([selectedState], (contact) =>
  contact.get('message')
);

export const getType = createSelector([selectedState], (contact) =>
  contact.get('type')
);

export const getOpen = createSelector([selectedState], (contact) =>
  contact.get('open')
);
