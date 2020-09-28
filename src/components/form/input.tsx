import React, { Component, ChangeEvent, createRef, RefObject } from 'react';
import styled from 'styled-components';
import { borderColor } from '../../constants/colors';
const UserNameStyled = styled.input`
	height: 40px;
	font-size: 16px;
	width: 100%;
	border: 1px solid ${borderColor};
	border-radius: 3px;
	padding: 0 10px;
`;
export type InputProps = {
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	onFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	value?: string;
	disabled?: boolean;
};
export type InputState = {
	value: string;
	placeholder: string;
	disabled: boolean;
};
export class Input extends Component<InputProps, InputState> {
	static defaultProps = {
		onChange: (e: ChangeEvent<HTMLInputElement>) => {},
		onFocus: (e: ChangeEvent<HTMLInputElement>) => {},
		onBlur: (e: ChangeEvent<HTMLInputElement>) => {},
		placeholder: '',
		value: '',
		disabled: false,
	};
	inputRef: RefObject<HTMLInputElement> = createRef<HTMLInputElement>();
	constructor(props: InputProps) {
		super(props);
		this.state = {
			value: this.props.value || '',
			placeholder: this.props.placeholder || '',
			disabled: this.props.disabled || false,
		};
		this.inputRef = createRef();
	}
	onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		this.setState({
			value: e.target.value,
		});
		if (this.props.onChange) this.props.onChange(e);
	};
	onFocusInput = (e: ChangeEvent<HTMLInputElement>) => {
		if (this.props.onFocus) this.props.onFocus(e);
	};
	onBlurInput = (e: ChangeEvent<HTMLInputElement>) => {
		if (this.props.onBlur) this.props.onBlur(e);
	};
	setValue = (value: string) => {
		this.setState({
			value: value,
		});
	};
	render() {
		return (
			<UserNameStyled
				ref={this.inputRef}
				onChange={this.onChangeInput}
				onFocus={this.onFocusInput}
				onBlur={this.onBlurInput}
				placeholder={this.state.placeholder}
				value={this.state.value}
				disabled={this.state.disabled}
			/>
		);
	}
}
