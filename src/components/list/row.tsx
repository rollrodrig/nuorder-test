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
export interface RowProps {}
export const Row: FC<RowProps> = () => {
	return (
		<RowStyled>
			<Title>Bug: devtools Profiler causes unexpected errors </Title>
			<TagStyled>Type: bug</TagStyled>
			<Meta>#19911 opened yesterday by henryqdineen</Meta>
		</RowStyled>
	);
};
