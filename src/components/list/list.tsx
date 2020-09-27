import React, { FC, useEffect, useState } from 'react';
import { Wrapper } from './wrapper';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { TReducer } from '../../reducers/root';
import { Status } from './status';
import { Results } from './results';
import { TStatusState } from '../../reducers/status';
import { makeRequest, setResults } from '../../reducers/storage';
import { TIssuesData } from '../../service/github';
export interface ListProps {}
const shouldShowStatus = (status: TStatusState): boolean => {
	return status.loading || status.error;
};
export const List: FC<ListProps> = () => {
	const [localResults, setlocalResults] = useState<TIssuesData[]>([]);
	const reducerState = useSelector((state: TReducer) => state);
	const { status, storage } = reducerState;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(makeRequest());
	}, []);
	useEffect(() => {
		setlocalResults(storage.results);
		if (reducerState.storage.keywords === '') {
			setlocalResults(storage.results);
		} else {
			const tmpResults = storage.results.filter((res: TIssuesData) =>
				res.title.includes(storage.keywords)
			);
			setlocalResults(tmpResults);
		}
	}, [storage]);
	return (
		<Wrapper>
			{shouldShowStatus(status) ? (
				<Status status={status} />
			) : (
				<Results results={localResults} />
			)}
		</Wrapper>
	);
};
