import React, { FC, useEffect } from 'react';
import { Wrapper } from './wrapper';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { TReducer } from '../../reducers/root';
import { Status } from './status';
import { Results } from './results';
import { TStatusState } from '../../reducers/status';
import { makeRequest } from '../../reducers/storage';
export interface ListProps {}
const shouldShowStatus = (status: TStatusState): boolean => {
	return status.loading || status.error;
};
export const List: FC<ListProps> = () => {
	const reducerState = useSelector((state: TReducer) => state);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(makeRequest());
	}, []);
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
