import { connect } from 'react-redux';

import { dispatchGetBlog } from './actions';
import { getBlog, getMessage } from './selectors';

import BlogPost from './component';

const mapStateToProps = (state) => ({
  message: getMessage(state),
  blog: getBlog(state),
});

const dispatcher = {
  dispatchGetBlog,
};

export default connect(mapStateToProps, dispatcher)(BlogPost);
