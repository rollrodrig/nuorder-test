import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ListView } from './list-view';
import { TIssuesData } from '../../service/github';
import { TStatusState } from '../../reducers/status';
import { Status } from './status';
import { Results } from './results';
configure({ adapter: new Adapter() });
const results: TIssuesData[] = [
	{
		id: '111',
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
	{
		id: '222',
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
describe('<ListView />', () => {
	it('when loading true should render status', () => {
		const status: TStatusState = {
			ready: false,
			loading: true,
			success: false,
			error: false,
		};
		const wrapper: ShallowWrapper = shallow(
			<ListView results={results} status={status} />
		);
		expect(wrapper.find(Status).length).toBe(1);
		expect(wrapper.find(Results).length).toBe(0);
	});
	it('when error true, should render status', () => {
		const status: TStatusState = {
			ready: false,
			loading: false,
			success: false,
			error: true,
		};
		const wrapper: ShallowWrapper = shallow(
			<ListView results={results} status={status} />
		);
		expect(wrapper.find(Status).length).toBe(1);
		expect(wrapper.find(Results).length).toBe(0);
	});
	it('when ready, should render results', () => {
		const status: TStatusState = {
			ready: true,
			loading: false,
			success: false,
			error: false,
		};
		const wrapper: ShallowWrapper = shallow(
			<ListView results={results} status={status} />
		);
		expect(wrapper.find(Status).length).toBe(0);
		expect(wrapper.find(Results).length).toBe(1);
	});
});
