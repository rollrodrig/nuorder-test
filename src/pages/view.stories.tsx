import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { View, ViewProps } from './view';
export default {
	title: 'Pages/View',
	component: View,
} as Meta;
const Template: Story<ViewProps> = (args) => <View {...args} />;
export const Primary = Template.bind({});
