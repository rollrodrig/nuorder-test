import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Wrapper, WrapperProps } from './wrapper';
export default {
	title: 'List/Wrapper',
	component: Wrapper,
} as Meta;
const Template: Story<WrapperProps> = (args) => (
	<Wrapper {...args}>WRAPPER CONTENT</Wrapper>
);
export const Default = Template.bind({});
