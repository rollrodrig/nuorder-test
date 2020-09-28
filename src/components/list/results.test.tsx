import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Results, isArrowKey, calcNextIndex, hasResults } from './results';
import { Message } from '../messages/message';
import { Row } from './row';
import { TIssuesData } from '../../service/github';
configure({ adapter: new Adapter() });
describe('<Results />', () => {
	it('should render something', () => {
		const wrapper: ShallowWrapper = shallow(<Results results={[]} />);
	});
	it('with no results, should render Message', () => {
		const wrapper: ShallowWrapper = shallow(<Results results={[]} />);
		expect(wrapper.find(Message).length).toBe(1);
		expect(wrapper.find(Row).length).toBe(0);
	});
	it('with some results, should render Rows', () => {
		const results: TIssuesData[] = [
			{
				id: '123',
				title: 'Bug: devtools Profiler',
				state: 'closed',
				url: 'google.com',
				created_at: '2020',
				comments: 4,
				updated_at: '2020',
				user: { login: 'rollrodrig', id: 123, avatar: 'img' },
				labels: [
					{ color: 'c7c7c7', name: 'example 1' },
					{ color: 'c4c4c4', name: 'example 2' },
				],
				selected: false,
			},
		];
		const wrapper: ShallowWrapper = shallow(<Results results={results} />);
		expect(wrapper.find(Message).length).toBe(0);
		expect(wrapper.find(Row).length).toBe(1);
	});
});
describe('isArrowKey', () => {
	it('return true for up and down keys', () => {
		expect(isArrowKey(38)).toBeTruthy();
		expect(isArrowKey(40)).toBeTruthy();
	});
	it('reuturn false for any other values', () => {
		expect(isArrowKey(60)).toBeFalsy();
		expect(isArrowKey(50)).toBeFalsy();
	});
});
describe('calcNextIndex', () => {
	it('should reuturn 0 when max param is 0', () => {
		expect(calcNextIndex(10, 10, 0)).toBe(0);
	});
	it('on key 38, value should be decreased by 1', () => {
		expect(calcNextIndex(38, 4, 10)).toBe(3);
	});
	it('on key 40, value should be increased by 1', () => {
		expect(calcNextIndex(40, 4, 10)).toBe(5);
	});
	it('when max value is reached, the next value should be 0', () => {
		expect(calcNextIndex(40, 4, 4)).toBe(0);
	});
	it('when min current index is 0, next value should be max value', () => {
		expect(calcNextIndex(38, 0, 4)).toBe(4);
	});
});
describe('hasResults', () => {
	it('should return true when at least array have one object', () => {
		expect(hasResults([{}])).toBeTruthy();
		expect(hasResults([])).toBeFalsy();
	});
});
