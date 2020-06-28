import { createSelector } from 'reselect';

const contact = (state) => state.get('contact');

export const getMessage = createSelector([contact], (contact) =>
  contact.get('message')
);

export const getIsLoading = createSelector([contact], (contact) =>
  contact.get('isLoading')
);
