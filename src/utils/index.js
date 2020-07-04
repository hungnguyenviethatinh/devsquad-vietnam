import { LANDING_PAGE_AIMS as aims, ABOUT_US as aboutUs } from './Data';
import { formatDate } from './utils/DateTimeFormat';
import { default as browserHistory } from './BrowserHistory';

export const appData = {
  aims,
  aboutUs,
};

export const helpers = {
  formatDate,
  browserHistory,
};
