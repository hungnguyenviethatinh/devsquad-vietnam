import { connect } from 'react-redux';
import { dispatchSubscribe } from './actions';
import { getMessage } from './selectors';

import Subscribe from './component';

const mapStateToProps = (state) => ({
  message: getMessage(state),
});

const dispatcher = {
  dispatchSubscribe,
};

export default connect(mapStateToProps, dispatcher)(Subscribe);
