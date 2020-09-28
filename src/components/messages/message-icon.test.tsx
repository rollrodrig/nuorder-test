import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MessageIcon, MessageType } from './message-icon';
import { Warning, Error, Success } from '../icons/icons';
configure({ adapter: new Adapter() });
describe('<MessageIcon />', () => {
	it('should render Warning', () => {
		const wrapper: ShallowWrapper = shallow(
			<MessageIcon type={MessageType.warning} />
		);
		expect(wrapper.find(Warning).length).toBe(1);
		expect(wrapper.find(Error).length).toBe(0);
		expect(wrapper.find(Success).length).toBe(0);
	});
	it('should render Error', () => {
		const wrapper: ShallowWrapper = shallow(
			<MessageIcon type={MessageType.error} />
		);
		expect(wrapper.find(Warning).length).toBe(0);
		expect(wrapper.find(Error).length).toBe(1);
		expect(wrapper.find(Success).length).toBe(0);
	});
	it('should render Success', () => {
		const wrapper: ShallowWrapper = shallow(
			<MessageIcon type={MessageType.success} />
		);
		expect(wrapper.find(Warning).length).toBe(0);
		expect(wrapper.find(Error).length).toBe(0);
		expect(wrapper.find(Success).length).toBe(1);
	});
});
