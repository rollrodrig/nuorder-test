import React from 'react';
import { configure, shallow, mount, ShallowWrapper } from 'enzyme';
import { render, fireEvent, screen, getByTestId } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { store } from '../../reducers/root';
import { List, shouldShowStatus, filterIssues } from './list';
import { TIssuesData } from '../../service/github';
configure({ adapter: new Adapter() });
describe('<List />', () => {
	it('should render', () => {
		// todo
	});
});
describe('shouldShowStatus', () => {
	it('should return true when error is true', () => {
		const status = {
			error: true,
			loading: false,
			ready: false,
			success: false,
		};
		expect(shouldShowStatus(status)).toBeTruthy();
	});
	it('should return true when loading is true', () => {
		const status = {
			error: false,
			loading: true,
			ready: false,
			success: false,
		};
		expect(shouldShowStatus(status)).toBeTruthy();
	});
});

const results: TIssuesData[] = [
	{
		id: '123',
		title: 'react hook',
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
	{
		id: '222',
		title: 'unit test',
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
describe('filterIssues', () => {
	it('should filter results based on keyword', () => {
		const data = filterIssues(results, 'react');
		expect(data.length).toBe(1);
		expect(data[0].title).toEqual(results[0].title);
	});
	it('when keyword is not found, should return empty array', () => {
		const data = filterIssues(results, 'WEIRD WORD');
		expect(data.length).toBe(0);
	});
});
