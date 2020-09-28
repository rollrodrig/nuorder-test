import React, { FC } from 'react';
import styled from 'styled-components';
export const SubmitedStyled = styled.div`
	font-size: 18px;
`;
export interface KeywordProps {
	submited: boolean;
	query: string;
}
export const Keyword: FC<KeywordProps> = ({ submited = false, query = '' }) => {
	return (
		<>
			{submited ? (
				<SubmitedStyled>Searching for: {query}</SubmitedStyled>
			) : null}
		</>
	);
};
