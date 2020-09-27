import React, { FC } from 'react';
import styled from 'styled-components';
import { bgColor, borderColor } from '../../constants/colors';
import { Label } from './label';
import { TIssuesLabes } from '../../service/github';
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
const Meta = styled.div`
	font-size: 12px;
`;
export interface RowProps {
	id: string;
	title: string;
	selected: boolean;
	labels: TIssuesLabes[];
}
export const Row: FC<RowProps> = ({
	id,
	title,
	selected = false,
	labels = [],
}) => {
	return (
		<RowStyled selected={selected}>
			<Title>{title}</Title>
			<Label labels={labels} />
			<Meta>#19911 opened yesterday by henryqdineen</Meta>
		</RowStyled>
	);
};
