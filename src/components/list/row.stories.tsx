import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Row, RowProps } from './row';
export default {
	title: 'List/Row',
	component: Row,
} as Meta;
const Template: Story<RowProps> = (args) => <Row {...args} />;
export const Default = Template.bind({});
Default.args = {
	id: '123',
	title: 'Bug: devtools Profiler causes unexpected errors ',
};
