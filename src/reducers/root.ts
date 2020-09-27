import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { Storage, TStorageState } from './storage';
import { Status, TStatusState } from './status';
export interface TReducer {
	storage: TStorageState;
	status: TStatusState;
}
const loggerMiddleware = createLogger();
const rootReducer = combineReducers({
	storage: Storage,
	status: Status,
});
export const store = createStore(
	rootReducer,
	applyMiddleware(thunkMiddleware, loggerMiddleware)
);
