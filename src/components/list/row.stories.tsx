import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Row, RowProps } from './row';
export default {
	title: 'List/Row',
	component: Row,
} as Meta;
const Template: Story<RowProps> = (args) => <Row {...args} />;
export const Default = Template.bind({});
Default.args = {
	id: '123',
	title: 'Bug: devtools Profiler causes unexpected errors ',
	selected: false,
	labels: [
		{ color: 'c7c7c7', name: 'example 1' },
		{ color: 'c4c4c4', name: 'example 2' },
	],
	date: '2020',
	author: 'roll',
};
export const Selected = Template.bind({});
Selected.args = {
	id: '123',
	title: 'Bug: devtools Profiler causes unexpected errors ',
	selected: true,
	labels: [
		{ color: 'c7c7c7', name: 'example 1' },
		{ color: 'c4c4c4', name: 'example 2' },
	],
	date: '2020',
	author: 'roll',
};
