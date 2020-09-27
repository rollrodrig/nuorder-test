import React, { FC, ReactNode } from 'react';
import { Message } from '../messages/message';
import { MessageType } from '../messages/message-icon';
import { TStatusState } from '../../reducers/status';
import { Loading } from '../icons/loading';
export interface StatusProps {
	status: TStatusState;
}
export const Status: FC<StatusProps> = ({ status }) => {
	let render: ReactNode;
	if (status.error) {
		render = (
			<Message type={MessageType.error}>Something went wrong</Message>
		);
	} else if (status.loading) {
		render = <Loading />;
	} else {
		render = null;
	}
	return <>{render}</>;
};
