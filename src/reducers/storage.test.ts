import { Storage, initialState, setResults, setKeywords } from './storage';
describe('storage', () => {
	it('setKeywords, should store keyword', () => {
		const state = Storage(initialState(), setKeywords('my keyword'));
		expect(state.keywords).toEqual('my keyword');
	});
	it('setResults, should store results', () => {
		const state = Storage(initialState(), setResults([{ id: 1 }]));
		expect(state.results).toEqual([{ id: 1 }]);
	});
});
