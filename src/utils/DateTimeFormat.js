const _options = { year: 'numeric', month: 'short', day: 'numeric' };

export const formatDate = (date, locales = 'en-GB', options = _options) =>
  date && date !== undefined
    ? new Intl.DateTimeFormat(locales, options).format(new Date(date))
    : '';
