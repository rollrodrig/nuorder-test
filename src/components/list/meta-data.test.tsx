import React from 'react';
import { MetaData } from './meta-data';
import { render, getByText } from '@testing-library/react';
describe('<MetaData />', () => {
	it('should render date and user', () => {
		const { container } = render(<MetaData date="2020" author="roll" />);
		expect(getByText(container, 'created 2020, author: roll')).toBeTruthy();
	});
});
