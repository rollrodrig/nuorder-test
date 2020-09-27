import React, { FC } from 'react';
import { Search } from '../components/search/search';
import { List } from '../components/list/list';
import { Layout } from './layout';
export interface HomeProps {}
export const Home: FC<HomeProps> = () => {
	return (
		<Layout>
			<Search />
			<List />
		</Layout>
	);
};
