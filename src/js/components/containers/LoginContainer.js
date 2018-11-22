import React, { Component } from 'react';

import Input from '../presentational/Input';
import Button from '../presentational/Button';

class LoginContainer extends Component {
    constructor() {
        super();
        this.handleOnChangeUsername = this.handleOnChangeUsername.bind(this);
        this.handleOnChangePassword = this.handleOnChangePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleOnChangeUsername(event) {
        const { updateUsername } = this.props;
        updateUsername(event.target.value);
    }

    handleOnChangePassword(event) {
        const { updatePassword } = this.props;
        updatePassword(event.target.value);
    }

    handleLogin() {
        const { login, username, password } = this.props;
        login({ username, password });
    }

    render() {
        const {
            username,
            password,
            loginUserPending,
            loginUserError,
        } = this.props;

        return (
            <div>
                <div className="jumbotron mb-2 bg-light">
                    <form className="form justify-content-center">
                        <div className="form-group col-sm-12 col-md-6 offset-md-3 mt-4">
                            <Input
                                type="text"
                                value={username}
                                placeholder="Username"
                                style={inputFieldStyle}
                                handleOnChange={this.handleOnChangeUsername}
                            />
                            <Input
                                type="password"
                                value={password}
                                placeholder="Password"
                                style={pwFieldStyle}
                                handleOnChange={this.handleOnChangePassword}
                            />
                            <p>
                                {loginUserError &&
                                    'Invalid username or password'}
                            </p>
                            <Button
                                type="button"
                                text={
                                    loginUserPending ? 'LOGGING IN' : `LOG IN`
                                }
                                className="btn-block"
                                handleOnClick={this.handleLogin}
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const inputFieldStyle = {
    padding: '1.6rem',
    marginBottom: '1rem',
};

const pwFieldStyle = {
    padding: '1.6rem',
    marginBottom: '1rem',
};

export default LoginContainer;
