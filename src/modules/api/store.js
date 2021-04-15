import { combineReducers , applyMiddleware, createStore, compose } from "redux";
import apiReducer from "./reducer";

const reducers = combineReducers({
    api : apiReducer
});

const store = createStore(reducers)

export default store;