import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import articlesModule from './modules/articles';
import userModule from './modules/user';

const reducer = combineReducers({
    articlesModule,
    userModule,
});

const store = createStore(reducer, applyMiddleware(ReduxThunk));

export default store;
