import React, { FC } from 'react';
import styled from 'styled-components';
import { Wrapper } from './wrapper';
import { Status } from './status';
import { Results } from './results';
import { shouldShowStatus } from './list';
import { TStatusState } from '../../reducers/status';
import { TIssuesData } from '../../service/github';
export interface ListViewProps {
	status: TStatusState;
	results: TIssuesData[];
}
export const ListView: FC<ListViewProps> = ({ status, results }) => {
	return (
		<Wrapper>
			{shouldShowStatus(status) ? (
				<Status status={status} />
			) : (
				<Results results={results} />
			)}
		</Wrapper>
	);
};
