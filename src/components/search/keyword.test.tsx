import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Keyword, SubmitedStyled } from './keyword';
configure({ adapter: new Adapter() });
describe('<Keyword />', () => {
	it('should render message when submited is true', () => {
		const wrapper: ShallowWrapper = shallow(
			<Keyword submited={true} query={'react hook'} />
		);
		expect(wrapper.find(SubmitedStyled).text()).toEqual(
			'Searching for: react hook'
		);
	});
});
