import { connect } from 'react-redux';

import LoginContainer from '../../components/containers/LoginContainer';
import { login, updateUsername, updatePassword } from '../modules/user';

const mapStateToProps = ({
    userModule: {
        username,
        password,
        loginUserPending,
        loginUserError,
        loginUserSuccess,
    },
}) => ({
    username,
    password,
    loginUserPending,
    loginUserError,
    loginUserSuccess,
});

const mapDispatchToProps = dispatch => ({
    login: creds => dispatch(login(creds)),
    updateUsername: text => dispatch(updateUsername(text)),
    updatePassword: text => dispatch(updatePassword(text)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
