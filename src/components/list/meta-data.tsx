import React, { FC } from 'react';
import styled from 'styled-components';
const MetaStyled = styled.div`
	font-size: 12px;
`;
export interface MetaDataProps {
	date: string;
	author: string;
}
export const MetaData: FC<MetaDataProps> = ({ date, author }) => {
	return (
		<MetaStyled>
			created {date}, author: {author}
		</MetaStyled>
	);
};
