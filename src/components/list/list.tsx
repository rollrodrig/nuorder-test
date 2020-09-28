import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { TReducer } from '../../reducers/root';
import { TStatusState } from '../../reducers/status';
import { makeRequest } from '../../reducers/storage';
import { TIssuesData } from '../../service/github';
import { ListView } from './list-view';
export interface ListProps {}
export const shouldShowStatus = (status: TStatusState): boolean => {
	return status.loading || status.error;
};
export const filterIssues = (results: TIssuesData[], keyword: string) => {
	const tmpResults = results.filter((res: TIssuesData) =>
		res.title.includes(keyword)
	);
	return tmpResults;
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
			const tmpResults = filterIssues(storage.results, storage.keywords);
			setlocalResults(tmpResults);
		}
	}, [storage]);
	return <ListView status={status} results={localResults} />;
};
