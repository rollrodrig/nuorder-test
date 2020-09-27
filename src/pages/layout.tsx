import React, { FC } from 'react';
import styled from 'styled-components';
import { textColor } from '../storage/colors';
const LayoutStyled = styled.div`
	width: 100%;
	max-width: 900px;
	display: block;
	margin: 40px auto 0 auto;
	color: ${textColor};
`;
export interface LayoutProps {
	children: React.ReactNode;
}
export const Layout: FC<LayoutProps> = ({ children }) => {
	return <LayoutStyled>{children}</LayoutStyled>;
};
