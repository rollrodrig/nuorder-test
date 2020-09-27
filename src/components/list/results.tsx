import React, { FC } from 'react';
import styled from 'styled-components';
import { Row } from './row';
import { TReducer } from '../../reducers/root';
import { TIssuesData } from '../../service/github';
import { Message } from '../messages/message';
import { MessageType } from '../messages/message-icon';
const hasResults = (results: TIssuesData[]): boolean => {
	return results.length > 0;
};
export interface ResultsProps {
	results: TIssuesData[];
}
export const Results: FC<ResultsProps> = ({ results = [] }) => {
	console.log(results);
	return (
		<div>
			{hasResults(results) ? (
				results.map((result: TIssuesData) => (
					<Row key={result.id} id={result.id} title={result.title} />
				))
			) : (
				<Message type={MessageType.warning}>
					Type somethign in the search box
				</Message>
			)}
		</div>
	);
};
