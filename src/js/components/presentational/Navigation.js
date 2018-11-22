import React from 'react';
// import { Switch, Route } from 'react-router-dom';

import ArticlesWrapper from '../../redux/wrappers/ArticlesWrapper';
// import LoginWrapper from '../../redux/wrappers/LoginWrapper';

const Navigation = ({ loginUserSuccess }) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand logo" href="#">
                    Comment System
                </a>
            </nav>
            {/* {loginUserSuccess ? (
                <Switch>
                    <Route exact path="/" component={ArticlesWrapper} />
                </Switch>
            ) : (
                <Switch>
                    <Route exact path="/" component={LoginWrapper} />
                </Switch>
            )} */}
            <ArticlesWrapper />
        </div>
    );
};

export default Navigation;
