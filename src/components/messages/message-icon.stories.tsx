import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MessageIcon, MessageIconProps, MessageType } from './message-icon';
export default {
	title: 'Messages/MessageIcon',
	component: MessageIcon,
} as Meta;
const Template: Story<MessageIconProps> = (args) => <MessageIcon {...args} />;
export const Warning = Template.bind({});
Warning.args = {
	type: MessageType.warning,
};
export const Success = Template.bind({});
Success.args = {
	type: MessageType.success,
};
export const Error = Template.bind({});
Error.args = {
	type: MessageType.error,
};
