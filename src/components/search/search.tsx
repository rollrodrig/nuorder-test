import React, { FC, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Input } from '../form/input';
import { Keyword } from './keyword';
export interface SearchProps {}
const SearchStyled = styled.div`
	margin-bottom: 10px;
	height: 65px;
`;
export const Search: FC<SearchProps> = () => {
	const [searchKey, setSearchKey] = useState('');
	const [submited, setSubmited] = useState(false);
	const searchBoxRef: any = useRef<Input>();
	const onSubmit = (e: any) => {
		e.preventDefault();
		setSubmited(true);
		searchBoxRef.current.setValue('');
	};
	const onChangeKeyWord = (e: any) => {
		setSearchKey(e.target.value);
		setSubmited(false);
	};
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
