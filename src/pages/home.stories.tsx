import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Home, HomeProps } from './home';
import { ReduxProvider } from '../../.storybook/decorator';
export default {
	title: 'Pages/Home',
	component: Home,
	decorators: [
		(Story) => (
			<ReduxProvider>
				<Story />
			</ReduxProvider>
		),
	],
} as Meta;
const Template: Story<HomeProps> = (args: any) => <Home />;
export const Default = Template.bind({});
