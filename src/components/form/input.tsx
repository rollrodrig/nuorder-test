import React, { FC, useState, ChangeEvent, MutableRefObject } from 'react';
import styled from 'styled-components';
import { borderColor } from '../../storage/colors';
const UserNameStyled = styled.input`
	height: 40px;
	font-size: 16px;
	width: 100%;
	border: 1px solid ${borderColor};
	border-radius: 3px;
	padding: 0 10px;
`;
export interface InputProps {
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	onFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	value?: string;
	extRef: any;
}
export const Input: FC<InputProps> = ({
	onChange = () => {},
	onFocus = () => {},
	onBlur = () => {},
	placeholder = '',
	value = '',
	extRef,
}) => {
	const [inputValue, setInputValue] = useState(value);
	const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
		onChange(e);
	};
	const onFocusInput = (e: ChangeEvent<HTMLInputElement>) => {
		onFocus(e);
	};
	const onBlurInput = (e: ChangeEvent<HTMLInputElement>) => {
		onBlur(e);
	};
	return (
		<UserNameStyled
			ref={extRef}
			onFocus={onFocusInput}
			onBlur={onBlurInput}
			onChange={onChangeInput}
			placeholder={placeholder}
			value={inputValue}
		/>
	);
};
