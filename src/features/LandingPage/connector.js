import { connect } from 'react-redux';

import { dispatchGetBlogs } from '../Blog/actions';
import {
  getBlogs,
  getIsLoading,
  getMessage,
  getTotalCount,
} from '../Blog/selectors';

import LandingPage from './component';

const mapStateToProps = (state) => ({
  isLoading: getIsLoading(state),
  message: getMessage(state),
  blogs: getBlogs(state),
  totalCount: getTotalCount(state),
});

const dispatcher = {
  dispatchGetBlogs,
};

export default connect(mapStateToProps, dispatcher)(LandingPage);
