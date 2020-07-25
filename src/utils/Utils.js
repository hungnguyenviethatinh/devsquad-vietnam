export const parseTotalFromContentRange = (contentRangeHeader) =>
  parseInt(contentRangeHeader.split('/').pop(), 10);
