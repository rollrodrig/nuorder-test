import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Layout, LayoutProps } from './layout';
export default {
	title: 'Pages/Layout',
	component: Layout,
} as Meta;
const Template: Story<LayoutProps> = (args) => (
	<Layout {...args}>PAGE CONTENT</Layout>
);
export const Primary = Template.bind({});
