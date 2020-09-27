import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Search, SearchProps } from './search';
export default {
	title: 'Search/Search',
	component: Search,
} as Meta;
const Template: Story<SearchProps> = (args) => <Search {...args} />;
export const Default = Template.bind({});
