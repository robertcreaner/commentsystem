import { connect } from 'react-redux';

import Navigation from '../../components/presentational/Navigation';

const mapStateToProps = ({ userModule: { loginUserSuccess } }) => ({
    loginUserSuccess,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation);
