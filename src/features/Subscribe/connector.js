import { connect } from 'react-redux';
import { dispatchSubscribe } from './actions';
import { dispatchToggleToast } from '../Contact/actions';
import { getMessage, getType, getOpen } from './selectors';

import Subscribe from './component';

const mapStateToProps = (state) => ({
  open: getOpen(state),
  type: getType(state),
  message: getMessage(state),
});

const dispatcher = {
  dispatchSubscribe,
  dispatchToggleToast,
};

export default connect(mapStateToProps, dispatcher)(Subscribe);
