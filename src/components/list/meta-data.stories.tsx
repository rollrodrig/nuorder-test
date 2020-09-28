import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MetaData, MetaDataProps } from './meta-data';
export default {
	title: 'List/MetaData',
	component: MetaData,
} as Meta;
const Template: Story<MetaDataProps> = (args) => <MetaData {...args} />;
export const Primary = Template.bind({});
Primary.args = {
	date: '2020',
	author: 'roll',
};
