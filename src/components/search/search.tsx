import React, { FC, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Input } from '../form/input';
import { Keyword } from './keyword';
import { makeRequest } from '../../reducers/storage';
export interface SearchProps {}
const SearchStyled = styled.div`
	margin-bottom: 10px;
	height: 65px;
`;
export const Search: FC<SearchProps> = () => {
	const [searchKey, setSearchKey] = useState('');
	const [submited, setSubmited] = useState(false);
	const searchBoxRef: any = useRef<Input>();
	const dispatch = useDispatch();
	const onSubmit = (e: any) => {
		e.preventDefault();
		setSubmited(true);
		searchBoxRef.current.setValue('');
		dispatch(makeRequest(searchKey));
	};
	const onChangeKeyWord = (e: any) => {
		setSearchKey(e.target.value);
		setSubmited(false);
	};
	useEffect(() => {
		// searchBoxRef.current.setValue('');
	}, []);
	return (
		<SearchStyled>
			<form onSubmit={onSubmit}>
				<Input
					value={searchKey}
					onChange={onChangeKeyWord}
					ref={searchBoxRef}
				/>
			</form>
			<Keyword submited={submited} query={searchKey} />
		</SearchStyled>
	);
};
