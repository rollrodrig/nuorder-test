import { TReducer } from './root';
import { getResults, TIssuesData } from '../service/github';
import { setLoading, setError } from './status';
export enum ACTIONS {
	STORAGE_SET_RESULTS = 'STORAGE_SET_RESULTS',
}
export const makeRequest = (query: string) => {
	console.log('==== query', query);
	return (dispatch: any, state: TReducer) => {
		dispatch(setLoading(true));
		getResults('')
			.then((data: any) => {
				console.log(data);
				dispatch(setLoading(false));
				dispatch(setResults(data.data));
			})
			.catch((error: any) => {
				dispatch(setLoading(false));
				dispatch(setError(true));
			});
	};
};
export const setResults = (results: any[]) => {
	return { type: ACTIONS.STORAGE_SET_RESULTS, payload: { results } };
};
export interface TStorageState {
	results: TIssuesData[];
}
export const initialState = (): TStorageState => ({
	results: [],
});
export const Storage = (
	state = initialState(),
	action: { type: string; payload: any }
) => {
	switch (action.type) {
		case ACTIONS.STORAGE_SET_RESULTS:
			return {
				...state,
				results: action.payload.results,
			};
		default:
			return state;
	}
};
