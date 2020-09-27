import React, { FC, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Input } from '../form/input';
export interface SearchProps {}
const SearchStyled = styled.div`
	margin-bottom: 10px;
`;
const SubmitedStyled = styled.div`
	font-size: 18px;
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
	useEffect(() => {
		// searchBoxRef.current.setValue('');
	}, []);
	return (
		<SearchStyled>
			<div>
				<form onSubmit={onSubmit}>
					<Input
						value={searchKey}
						onChange={onChangeKeyWord}
						ref={searchBoxRef}
					/>
				</form>
			</div>
			{submited ? (
				<SubmitedStyled>Searching for: {searchKey}</SubmitedStyled>
			) : null}
		</SearchStyled>
	);
};
