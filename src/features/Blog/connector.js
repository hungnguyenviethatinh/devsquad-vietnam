import { connect } from 'react-redux';

import { dispatchGetBlogs } from './actions';
import { getBlogs, getIsLoading, getMessage, getTotalCount } from './selectors';

import Blog from './component';

const mapStateToProps = (state) => ({
  isLoading: getIsLoading(state),
  message: getMessage(state),
  blogs: getBlogs(state),
  totalCount: getTotalCount(state),
});

const dispatcher = {
  dispatchGetBlogs,
};

export default connect(mapStateToProps, dispatcher)(Blog);
