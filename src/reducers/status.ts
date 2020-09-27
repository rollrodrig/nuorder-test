export enum ACTIONS {
	STATUS_SET_LOADING = 'STATUS_SET_LOADING',
	STATUS_SET_SUCCESS = 'STATUS_SET_SUCCESS',
	STATUS_SET_ERROR = 'STATUS_SET_ERROR',
}
export const setLoading = (state: boolean) => {
	return { type: ACTIONS.STATUS_SET_LOADING, payload: { state } };
};
export const setError = (state: boolean) => {
	return { type: ACTIONS.STATUS_SET_ERROR, payload: { state } };
};
export const setSuccess = (state: boolean) => {
	return { type: ACTIONS.STATUS_SET_SUCCESS, payload: { state } };
};
export interface TStatusState {
	ready: boolean;
	loading: boolean;
	success: boolean;
	error: boolean;
}
export const initialState = (): TStatusState => ({
	ready: false,
	loading: false,
	success: false,
	error: false,
});
export const Status = (
	state = initialState(),
	action: { type: string; payload: any }
) => {
	switch (action.type) {
		case ACTIONS.STATUS_SET_LOADING:
			return {
				...state,
				loading: action.payload.state,
			};
		case ACTIONS.STATUS_SET_SUCCESS:
			return {
				...state,
				success: action.payload.state,
			};
		case ACTIONS.STATUS_SET_ERROR:
			return {
				...state,
				error: action.payload.state,
			};
		default:
			return state;
	}
};
