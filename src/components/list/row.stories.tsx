import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Row, RowProps } from './row';
export default {
	title: 'List/Row',
	component: Row,
} as Meta;
const Template: Story<RowProps> = (args) => <Row {...args} />;
export const Primary = Template.bind({});
