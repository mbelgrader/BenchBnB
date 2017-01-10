import { connect } from 'react-redux';
import { selectAllBenches } from '../../reducers/selectors';
import { updateFilter } from '../../actions/filter_actions';

import Search from './search';

const mapStateToProps = ({ benches }) => {
    debugger
({
  benches: selectAllBenches(benches)
});
}
const mapDispatchToProps = dispatch => ({
  updateFilter: (filter) => dispatch(updateFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
