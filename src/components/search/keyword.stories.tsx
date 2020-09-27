import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Keyword, KeywordProps } from './keyword';
export default {
	title: 'Search/Keyword',
	component: Keyword,
} as Meta;
const Template: Story<KeywordProps> = (args) => <Keyword {...args} />;
export const Default = Template.bind({});
export const WithResult = Template.bind({});
WithResult.args = {
	submited: true,
	query: 'Lorem ipsum dolor sit amet consectetur adipisicing'
};
