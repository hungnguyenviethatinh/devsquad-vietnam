import { connect } from 'react-redux';

import { dispatchGetBlogs } from '../Blog/actions';
import { getBlogs, getMessage, getTotalCount } from '../Blog/selectors';

import LandingPage from './component';

const mapStateToProps = (state) => ({
  message: getMessage(state),
  blogs: getBlogs(state),
  totalCount: getTotalCount(state),
});

const dispatcher = {
  dispatchGetBlogs,
};

export default connect(mapStateToProps, dispatcher)(LandingPage);
