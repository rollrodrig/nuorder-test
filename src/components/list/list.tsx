import React, { FC } from 'react';
import { Wrapper } from './wrapper';
import { Row } from './row';
export interface ListProps {}
export const List: FC<ListProps> = () => {
	return (
		<Wrapper>
			<Row />
			<Row />
			<Row />
			<Row />
		</Wrapper>
	);
};
