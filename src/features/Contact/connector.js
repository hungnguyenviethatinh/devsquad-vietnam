import { connect } from 'react-redux';
import { dispatchContactUs } from './actions';
import { getMessage } from './selectors';

import Contact from './component';

const mapStateToProps = (state) => ({
  message: getMessage(state),
});

const dispatcher = {
  dispatchContactUs,
};

export default connect(mapStateToProps, dispatcher)(Contact);
