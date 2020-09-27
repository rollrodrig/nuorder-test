import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { List, ListProps } from './list';
import { ReduxProvider } from '../../../.storybook/decorator';
export default {
	title: 'List/List',
	component: List,
	decorators: [
		(Story) => (
			<ReduxProvider>
				<Story />
			</ReduxProvider>
		),
	],
} as Meta;
const Template: Story<ListProps> = (args) => <List {...args} />;
export const Default = Template.bind({});
