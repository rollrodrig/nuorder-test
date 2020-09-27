import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Search, SearchProps } from './search';
import { ReduxProvider } from '../../../.storybook/decorator';
export default {
	title: 'Search/Search',
	component: Search,
	decorators: [
		(Story) => (
			<ReduxProvider>
				<Story />
			</ReduxProvider>
		),
	],
} as Meta;
const Template: Story<SearchProps> = (args) => <Search {...args} />;
export const Default = Template.bind({});
