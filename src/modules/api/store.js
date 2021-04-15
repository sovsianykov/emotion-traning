import { combineReducers , applyMiddleware, createStore, compose } from "redux";
import thunk from 'redux-thunk';

import apiReducer from "./reducer";

const reducers = combineReducers({
    api : apiReducer
});

const store = createStore( reducers, compose( applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

window.store = store

export default store;
