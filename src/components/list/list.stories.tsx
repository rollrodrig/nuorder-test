import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { List, ListProps } from './list';
export default {
	title: 'List/List',
	component: List,
} as Meta;
const Template: Story<ListProps> = (args) => <List {...args} />;
export const Default = Template.bind({});
