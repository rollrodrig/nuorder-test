import React from 'react';
import { configure, shallow, mount, ShallowWrapper } from 'enzyme';
import { render, fireEvent, screen, getByTestId } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { store } from '../../reducers/root';
import { List, shouldShowStatus } from './list';
configure({ adapter: new Adapter() });
describe('<List />', () => {
	it('should render', () => {
		// todo
	});
});
describe('shouldShowStatus', () => {
	it('should return true when error is true', () => {
		const status = {
			error: true,
			loading: false,
			ready: false,
			success: false,
		};
		expect(shouldShowStatus(status)).toBeTruthy();
	});
	it('should return true when loading is true', () => {
		const status = {
			error: false,
			loading: true,
			ready: false,
			success: false,
		};
		expect(shouldShowStatus(status)).toBeTruthy();
	});
});
