import { applyMiddleware, combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import logger from 'redux-logger'
import { composeWithDevTools } from '@redux-devtools/extension';
import userReducer from "./reducers/userReducer";
import {thunk} from "redux-thunk";

const loggerMiddleware = (store) => (next) => (action) => {
    console.log("dispatching", action);
    return next(action);
};

const rootReducer = combineReducers({
  counter: counterReducer,
  users: userReducer,
});

const middleware = [loggerMiddleware, logger,thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware),
  ),
);

export default store;


