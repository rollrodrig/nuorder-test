import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Status, StatusProps } from './status';
export default {
	title: 'List/Status',
	component: Status,
} as Meta;
const Template: Story<StatusProps> = (args) => <Status {...args} />;
export const Error = Template.bind({});
Error.args = {
	status: {
		error: true,
		loading: false,
		success: false,
	},
};
export const Loading = Template.bind({});
Loading.args = {
	status: {
		error: false,
		loading: true,
		success: false,
	},
};
export const NoRender = Template.bind({});
NoRender.args = {
	status: {
		error: false,
		loading: false,
		success: true,
	},
};
