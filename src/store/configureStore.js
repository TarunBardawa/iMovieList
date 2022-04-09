
import { createStore, applyMiddleware } from "redux";
import promise from 'redux-promise';
import { logger } from 'redux-logger';

import { combineReducers } from 'redux';
import movies from './reducer';

const appReducer = combineReducers({
  movies,
});

const middleware = applyMiddleware(promise, logger);

export default createStore(appReducer, middleware);