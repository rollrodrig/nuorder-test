import { TReducer } from './root';
import { getResults, TIssuesData } from '../service/github';
import { setLoading, setError } from './status';
export enum ACTIONS {
	STORAGE_SET_RESULTS = 'STORAGE_SET_RESULTS',
	STORAGE_SET_KEYWORDS = 'STORAGE_SET_KEYWORDS',
}
export const makeRequest = () => {
	return (dispatch: any, state: TReducer) => {
		dispatch(setLoading(true));
		getResults()
			.then((data: any) => {
				dispatch(setLoading(false));
				dispatch(setResults(data));
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
export const setKeywords = (keywords: string) => {
	return { type: ACTIONS.STORAGE_SET_KEYWORDS, payload: { keywords } };
};
export interface TStorageState {
	keywords: string;
	results: TIssuesData[];
}
export const initialState = (): TStorageState => ({
	keywords: '',
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
		case ACTIONS.STORAGE_SET_KEYWORDS:
			return {
				...state,
				keywords: action.payload.keywords,
			};
		default:
			return state;
	}
};
