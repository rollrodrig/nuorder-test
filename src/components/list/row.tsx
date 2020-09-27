import React, { FC } from 'react';
import styled from 'styled-components';
import { bgColor, borderColor } from '../../storage/colors';
const RowStyled = styled.div`
	padding: 10px 15px;
	background-color: #ffffff;
	border-bottom: 1px solid ${borderColor};
	&:hover {
		background-color: ${bgColor};
	}
`;
const Title = styled.div`
	font-size: 16px;
`;
const TagStyled = styled.span`
	border-radius: 30px;
	font-size: 12px;
`;
const Meta = styled.div`
	font-size: 12px;
`;
export interface RowProps {
	id: string;
	title: string;
}
export const Row: FC<RowProps> = ({ id, title }) => {
	return (
		<RowStyled>
			<Title>{title}</Title>
			<TagStyled>Type: bug</TagStyled>
			<Meta>#19911 opened yesterday by henryqdineen</Meta>
		</RowStyled>
	);
};
