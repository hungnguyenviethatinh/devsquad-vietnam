import { connect } from 'react-redux';
import { dispatchContactUs, dispatchToggleToast } from './actions';
import { getMessage, getType, getOpen } from './selectors';

import Contact from './component';

const mapStateToProps = (state) => ({
  open: getOpen(state),
  type: getType(state),
  message: getMessage(state),
});

const dispatcher = {
  dispatchContactUs,
  dispatchToggleToast,
};

export default connect(mapStateToProps, dispatcher)(Contact);
