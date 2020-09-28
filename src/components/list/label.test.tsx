import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Label, LabelStyled } from './label';
configure({ adapter: new Adapter() });
describe('<Label />', () => {
	it('should render nothing when empty labels are passed', () => {
		const wrapper: ShallowWrapper = shallow(<Label labels={[]} />);
		expect(wrapper.find(LabelStyled).length).toBe(0);
	});
	it('should render one label', () => {
		const labels = [
			{
				color: 'c3c3c3',
				name: 'open',
			},
		];
		const wrapper: ShallowWrapper = shallow(<Label labels={labels} />);
		expect(wrapper.find(LabelStyled).length).toBe(1);
	});
	it('should render three label', () => {
		const labels = [
			{ color: 'c3c3c3', name: 'open' },
			{ color: 'c3c3c3', name: 'closed' },
			{ color: 'c3c3c3', name: 'bug' },
		];
		const wrapper: ShallowWrapper = shallow(<Label labels={labels} />);
		expect(wrapper.find(LabelStyled).length).toBe(3);
	});
	it('should write name key as content', () => {
		const labels = [
			{ color: 'c3c3c3', name: 'open' },
			{ color: 'c3c3c3', name: 'closed' },
		];
		const wrapper: ShallowWrapper = shallow(<Label labels={labels} />);
		expect(wrapper.find(LabelStyled).at(0).text()).toEqual(labels[0].name);
		expect(wrapper.find(LabelStyled).at(1).text()).toEqual(labels[1].name);
	});
});
