import { connect } from 'react-redux';

import { dispatchToggleSideBar } from './actions';
import { getIsLoading, getOpen } from './selectors';
import Layout from '../../components/Layout';

const mapStateToProps = (state) => ({
  isLoading: getIsLoading(state),
  open: getOpen(state),
});

const dispatcher = {
  dispatchToggleSideBar,
};

export default connect(mapStateToProps, dispatcher)(Layout);
