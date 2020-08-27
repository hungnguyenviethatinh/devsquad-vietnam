export const parseTotalFromContentRange = (contentRangeHeader) => parseInt(contentRangeHeader.split('/').pop(), 10);

export const createRangePaginationQuery = (page = 1, perPage = 9) => encodeURI(`range=[${(page - 1) * perPage}, ${page * perPage - 1}]`);