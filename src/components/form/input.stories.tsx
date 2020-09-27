import React, { ChangeEvent } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Input, InputProps } from './input';
export default {
	title: 'Form/Input',
	component: Input,
	argTypes: {},
} as Meta;
const Template: Story<InputProps> = (args) => <Input {...args} />;
export const Default = Template.bind({});
Default.args = {
	onChange: (e: ChangeEvent<HTMLInputElement>) => {
		console.log(e);
	},
	onFocus: (e: ChangeEvent<HTMLInputElement>) => {
		console.log(e);
	},
	onBlur: (e: ChangeEvent<HTMLInputElement>) => {
		console.log(e);
	},
	placeholder: 'example placeholder',
	value: '',
	disabled: false,
};
export const Disabled = Template.bind({});
Disabled.args = {
	onChange: (e: ChangeEvent<HTMLInputElement>) => {
		console.log(e);
	},
	onFocus: (e: ChangeEvent<HTMLInputElement>) => {
		console.log(e);
	},
	onBlur: (e: ChangeEvent<HTMLInputElement>) => {
		console.log(e);
	},
	placeholder: 'example placeholder',
	value: 'Example content',
	disabled: true,
};
