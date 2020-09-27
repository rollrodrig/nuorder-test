import React from 'react';
import { Provider } from 'react-redux';
import { fakeResults } from '../src/service/fakeResults';
import { store } from '../src/reducers/root';
export const ReduxProvider = ({ children }: any) => (
	<Provider store={store}>{children}</Provider>
);
export const fakeStore = () => ({
	storage: { results: fakeResults()['data'] },
	status: { loading: false, success: false, error: false },
});
