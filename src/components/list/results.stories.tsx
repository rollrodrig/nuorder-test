import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Results, ResultsProps } from './results';
import { fakeResults } from '../../service/fakeResults';
export default {
	title: 'List/Results',
	component: Results,
} as Meta;
const Template: Story<ResultsProps> = (args) => <Results {...args} />;
export const Default = Template.bind({});
Default.args = {
	results: fakeResults()['data'],
};
export const NoResults = Template.bind({});
NoResults.args = {
	results: [],
};
