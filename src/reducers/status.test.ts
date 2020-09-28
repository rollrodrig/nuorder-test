import {
	Status,
	initialState,
	setLoading,
	setError,
	setSuccess,
} from './status';
describe('storage', () => {
	it('setLoading, should set loading to true', () => {
		const state = Status(initialState(), setLoading(true));
		expect(state.loading).toEqual(true);
	});
	it('setLoading, should set loading to false', () => {
		const state = Status(initialState(), setLoading(false));
		expect(state.loading).toEqual(false);
	});
	it('setError, should set error to true', () => {
		const state = Status(initialState(), setError(true));
		expect(state.error).toEqual(true);
	});
	it('setError, should set error to false', () => {
		const state = Status(initialState(), setError(false));
		expect(state.error).toEqual(false);
	});
	it('setSuccess, should set success to true', () => {
		const state = Status(initialState(), setSuccess(true));
		expect(state.success).toEqual(true);
	});
	it('setSuccess, should set success to false', () => {
		const state = Status(initialState(), setSuccess(false));
		expect(state.success).toEqual(false);
	});
});
