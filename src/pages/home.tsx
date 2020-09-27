import React, { FC } from 'react';
import styled from 'styled-components';
import { Search } from '../components/search/search';
import { List } from '../components/list/list';
const HomeStyled = styled.div`
	width: 100%;
	max-width: 900px;
	display: block;
	margin: 40px auto 0 auto;
`;
export interface HomeProps {}
export const Home: FC<HomeProps> = () => {
	return (
		<HomeStyled>
			<Search />
			<List />
		</HomeStyled>
	);
};
