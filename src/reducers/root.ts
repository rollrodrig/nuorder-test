import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { Game } from './reports';
const loggerMiddleware = createLogger();
const rootReducer = combineReducers({
	game: Game,
});
export const store = createStore(
	rootReducer,
	applyMiddleware(thunkMiddleware, loggerMiddleware)
);
