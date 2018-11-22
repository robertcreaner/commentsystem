const LOGIN_PENDING = 'LOGIN_PENDING';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';
const USERNAME_UPDATE = 'USERNAME_UPDATE';
const PW_UPDATE = 'PW_UPDATE';

import requestLogin from '../../services/user';

export const login = creds => {
    return dispatch => {
        dispatch({ type: LOGIN_PENDING });
        requestLogin(creds)
            .then(res => {
                dispatch({ type: LOGIN_SUCCESS, payload: res });
            })
            .catch(err => {
                dispatch({ type: LOGIN_ERROR, payload: err });
            });
    };
};

export const updateUsername = text => ({
    type: USERNAME_UPDATE,
    payload: text,
});

export const updatePassword = text => ({
    type: PW_UPDATE,
    payload: text,
});

const defaultState = {
    user: {
        firstName: '',
        lastName: '',
    },
    username: '',
    password: '',
    loginUserPending: false,
    loginUserError: false,
    loginUserSuccess: false,
};

const reducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case LOGIN_PENDING: {
            return { ...state, loginUserPending: true, loginUserError: false };
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                user: payload,
                loginUserPending: false,
                loginUserError: false,
                loginUserSuccess: true,
            };
        }
        case LOGIN_ERROR: {
            return {
                ...state,
                loginUserPending: false,
                loginUserError: true,
                loginUserSuccess: false,
            };
        }
        case USERNAME_UPDATE: {
            return {
                ...state,
                username: payload,
            };
        }
        case PW_UPDATE: {
            return {
                ...state,
                password: payload,
            };
        }
        default:
            return state;
    }
};

export default reducer;
