import { connect } from 'react-redux';
import { dispatchContactUs } from './actions';
import { getIsLoading, getMessage } from './selectors';

import Contact from './component';

const mapStateToProps = (state) => ({
  isLoading: getIsLoading(state),
  message: getMessage(state),
});

const dispatcher = {
  dispatchContactUs,
};

export default connect(mapStateToProps, dispatcher)(Contact);
