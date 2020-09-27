import React, { FC, useState, useRef, useEffect, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Input } from '../form/input';
import { Keyword } from './keyword';
import { setKeywords } from '../../reducers/storage';
import { useDispatch } from 'react-redux';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
export interface SearchProps {}
const SearchStyled = styled.div`
	margin-bottom: 10px;
	height: 65px;
`;
const onFilter$: any = new Subject().pipe(debounceTime(500));
export const Search: FC<SearchProps> = () => {
	const [searchKey, setSearchKey] = useState('');
	const [submited, setSubmited] = useState(false);
	const searchBoxRef: any = useRef<Input>();
	const dispatch = useDispatch();
	const onSubmit = (e: any) => {
		e.preventDefault();
		setSubmited(true);
	};
	const onChangeKeyWord = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchKey(e.target.value);
		setSubmited(false);
		onFilter$.next(e.target.value);
	};
	useEffect(() => {
		onFilter$.subscribe((keyword: string) => {
			dispatch(setKeywords(keyword));
		});
		return () => {
			onFilter$.unsubcribe();
		};
	}, []);
	return (
		<SearchStyled>
			<form onSubmit={onSubmit}>
				<Input
					value={searchKey}
					onChange={onChangeKeyWord}
					ref={searchBoxRef}
					placeholder={'Filter...'}
				/>
			</form>
			<Keyword submited={submited} query={searchKey} />
		</SearchStyled>
	);
};
