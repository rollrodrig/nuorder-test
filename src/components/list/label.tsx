import React, { FC } from 'react';
import styled from 'styled-components';
import { TIssuesLabes } from '../../service/github';
export const LabelStyled = styled.span`
	border-radius: 30px;
	font-size: 11px;
	padding: 0 5px;
	margin: 0 5px;
	background-color: ${(props: { color: string }) => `#${props.color}`};
`;
export interface LabelProps {
	labels: TIssuesLabes[];
}
export const Label: FC<LabelProps> = ({ labels }) => {
	return (
		<>
			{labels.map((label: TIssuesLabes) => (
				<LabelStyled key={label.name} color={label.color}>
					{label.name}
				</LabelStyled>
			))}
		</>
	);
};
