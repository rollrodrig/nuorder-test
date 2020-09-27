import React, { FC } from 'react';
import styled from 'styled-components';
import { Warning, Error, Success } from '../icons/icons';
import { errorColor, warningColor, successColor } from '../../storage/colors';
const IconStyled = styled.span`
	color: ${(props: { type: string }) => {
		if (props.type === MessageType.error) {
			return errorColor;
		} else if (props.type === MessageType.warning) {
			return warningColor;
		} else {
			return successColor;
		}
	}};
`;
export enum MessageType {
	warning = 'warning',
	error = 'error',
	success = 'success',
}
export interface MessageIconProps {
	type: MessageType;
}
export const MessageIcon: FC<MessageIconProps> = ({ type }) => {
	let icon = null;
	switch (type) {
		case MessageType.warning:
			icon = <Warning />;
			break;
		case MessageType.error:
			icon = <Error />;
			break;
		case MessageType.success:
			icon = <Success />;
			break;
		default:
			icon = <Success />;
	}
	return <IconStyled type={type}>{icon}</IconStyled>;
};

