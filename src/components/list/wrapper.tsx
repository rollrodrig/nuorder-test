import React, { FC } from 'react';
import styled from 'styled-components';
import { borderColor } from '../../constants/colors';
export const WraperStyled = styled.div`
	border: 1px solid ${borderColor};
	border-radius: 3px;
	> div:last-child {
		border-bottom: 0px;
	}
`;
export interface WrapperProps {
	children: React.ReactNode;
}
export const Wrapper: FC<WrapperProps> = ({ children }) => {
	return <WraperStyled>{children}</WraperStyled>;
};
