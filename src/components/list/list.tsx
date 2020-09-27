import React, { FC } from 'react';
import { Wrapper } from './wrapper';
import { Row } from './row';
import { useSelector } from 'react-redux';
import { TReducer } from '../../reducers/root';
import { TStorageState } from '../../reducers/storage';
import { TIssuesData } from '../../service/github';
import { Message } from '../messages/message';
import { MessageType } from '../messages/message-icon';
export interface ListProps {}
export const List: FC<ListProps> = () => {
	const reducerState = useSelector((state: TReducer) => state);
	const hasResults = () => {
		return reducerState.storage.results.length === 0;
	};
	return (
		<Wrapper>
			{hasResults() ? (
				<Message type={MessageType.warning}>
					Write some query in the search box
				</Message>
			) : null}
			{reducerState.storage.results.map((result: TIssuesData) => (
				<Row key={result.id} id={result.id} title={result.title} />
			))}
		</Wrapper>
	);
};
