import React, { FC } from 'react';
import styled from 'styled-components';
import { MessageIcon, MessageType } from './message-icon';
const MessageStyled = styled.div`
	display: block;
	text-align: center;
	padding: 20px;
`;
export interface MessageProps {
	type: MessageType;
	children: React.ReactNode;
}
export const Message: FC<MessageProps> = ({ type, children }) => {
	return (
		<MessageStyled>
			<MessageIcon type={type} />
			&nbsp;
			{children}
		</MessageStyled>
	);
};
