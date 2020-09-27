import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Label, LabelProps } from './label';
export default {
	title: 'List/Label',
	component: Label,
} as Meta;
const Template: Story<LabelProps> = (args) => <Label {...args}>exampple</Label>;
export const Primary = Template.bind({});
Primary.args = {
	labels: [
		{ color: 'c7c7c7', name: 'example 1' },
		{ color: 'c4c4c4', name: 'example 2' },
	],
};
