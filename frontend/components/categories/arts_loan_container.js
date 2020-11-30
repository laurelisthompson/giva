import { connect } from 'react-redux';
import { fetchAllLoans } from '../../actions/loan_actions';
import ArtsLoanIndex from './arts_loan_index';

const mSTP = state => ({
    loans: Object.values(state.entities.loans),
    session: state.session,
});

const mDTP = dispatch => ({
    fetchAllLoans: () => dispatch(fetchAllLoans()),
    logout: () => dispatch(logout()),
});

export default connect(mSTP, mDTP)(ArtsLoanIndex);