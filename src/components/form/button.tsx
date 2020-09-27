import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { borderColor, textColor, bgColor } from '../../storage/colors';
const ButtonStyled = styled.button`
	border: 1px solid ${borderColor};
	border-radius: 3px;
	height: 40px;
	padding: 0 20px;
	text-align: center;
	color: ${textColor};
	font-size: 16px;
	font-weight: 700;
	box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.05);
	background-color: ${bgColor};
	cursor: pointer;
	&:hover {
		box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
	}
`;
export interface ButtonProps {
	children: ReactNode;
	onClick: () => void;
}
export const Button: FC<ButtonProps> = ({ children, onClick }) => {
	return (
		<ButtonStyled onClick={onClick} type="button">
			{children}
		</ButtonStyled>
	);
};
