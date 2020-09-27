import React, { FC } from 'react';
import { Wrapper } from './wrapper';
import { useSelector } from 'react-redux';
import { TReducer } from '../../reducers/root';
import { Status } from './status';
import { Results } from './results';
import { TStatusState } from '../../reducers/status';
export interface ListProps {}
const shouldShowStatus = (status: TStatusState): boolean => {
	return status.loading || status.error;
};
export const List: FC<ListProps> = () => {
	const reducerState = useSelector((state: TReducer) => state);
	return (
		<Wrapper>
			{shouldShowStatus(reducerState.status) ? (
				<Status status={reducerState.status} />
			) : (
				<Results results={reducerState.storage.results} />
			)}
		</Wrapper>
	);
};
