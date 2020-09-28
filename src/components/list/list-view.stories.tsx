import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ListView, ListViewProps } from './list-view';
import { TIssuesData } from '../../service/github';
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
export default {
	title: 'List/ListView',
	component: ListView,
} as Meta;
const Template: Story<ListViewProps> = (args) => <ListView {...args} />;
export const Loading = Template.bind({});
Loading.args = {
	status: {
		ready: false,
		loading: true,
		success: false,
		error: false,
	},
	results: results,
};
export const Error = Template.bind({});
Error.args = {
	status: {
		ready: false,
		loading: false,
		success: false,
		error: true,
	},
	results: results,
};
export const Results = Template.bind({});
Results.args = {
	status: {
		ready: true,
		loading: false,
		success: false,
		error: false,
	},
	results: results,
};
