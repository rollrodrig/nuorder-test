import React, { FC } from 'react';
import styled from 'styled-components';
import { bgColor, borderColor } from '../../constants/colors';
import { Label } from './label';
import { TIssuesLabes } from '../../service/github';
import { MetaData } from './meta-data';
const RowStyled = styled.div`
	padding: 10px 15px;
	background-color: ${({ selected }: { selected: boolean }) =>
		selected ? bgColor : '#ffffff'};
	border-bottom: 1px solid ${borderColor};
	&:hover {
		background-color: ${bgColor};
	}
`;
const Title = styled.div`
	font-size: 16px;
`;
export interface RowProps {
	id: string;
	title: string;
	selected: boolean;
	labels: TIssuesLabes[];
	date: string;
	author: string;
}
export const Row: FC<RowProps> = ({
	id,
	title,
	selected = false,
	labels = [],
	date,
	author,
}) => {
	return (
		<RowStyled selected={selected}>
			<Title>{title}</Title>
			<Label labels={labels} />
			<MetaData date={date} author={author} />
		</RowStyled>
	);
};
