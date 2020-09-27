import React, { FC, useRef, useEffect, MutableRefObject } from 'react';
import styled from 'styled-components';
import { Input } from '../form/input';
export interface SearchProps {}
const SearchStyled = styled.div`
	margin-bottom: 10px;
`;
export const Search: FC<SearchProps> = () => {
	const searchBoxRef: any = useRef<HTMLInputElement>();
	const onSubmit = (e: any) => {
		e.preventDefault();
		console.log('submit');
	};
	useEffect(() => {
		searchBoxRef.current.focus();
	}, []);
	return (
		<SearchStyled>
			<form onSubmit={onSubmit}>
				<Input extRef={searchBoxRef} />
				{/* <input ref={searchBoxRef} /> */}
			</form>
		</SearchStyled>
	);
};
