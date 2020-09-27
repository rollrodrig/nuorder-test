import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Message, MessageProps } from './message';
import { MessageType } from './message-icon';
export default {
	title: 'Message/Message',
	component: Message,
} as Meta;
const Template: Story<MessageProps> = (args) => (
	<Message {...args}>
		Lorem ipsum, dolor sit amet consectetur adipisicing
	</Message>
);
export const Success = Template.bind({});
Success.args = {
	type: MessageType.success,
};
export const Warning = Template.bind({});
Warning.args = {
	type: MessageType.warning,
};
export const Error = Template.bind({});
Error.args = {
	type: MessageType.error,
};
