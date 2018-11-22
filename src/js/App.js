import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import '../scss/styles.scss';
import store from '../js/redux/store';
import NavigationWrapper from './redux/wrappers/NavigationWrapper';
import Footer from './components/presentational/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

library.add(faThumbsUp);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <NavigationWrapper />
                        <Footer />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
