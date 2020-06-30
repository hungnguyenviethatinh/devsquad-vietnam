import { connect } from 'react-redux';

import { getIsLoading } from './selectors';
import Layout from '../../components/Layout';

const mapStateToProps = (state) => ({
  isLoading: getIsLoading(state),
});

export default connect(mapStateToProps)(Layout);
