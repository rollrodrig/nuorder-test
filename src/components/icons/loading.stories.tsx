import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Loading, LoadingProps } from './loading';
export default {
	title: 'Icons/Loading',
	component: Loading,
} as Meta;
const Template: Story<LoadingProps> = (args) => <Loading {...args} />;
export const Default = Template.bind({});
