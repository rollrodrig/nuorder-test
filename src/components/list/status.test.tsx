import React, { Fragment } from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Status } from './status';
import { Message } from '../messages/message';
import { Loading } from '../icons/loading';
configure({ adapter: new Adapter() });
describe('<Status />', () => {
	it('on error true should render Message', () => {
		const status = {
			ready: false,
			loading: false,
			success: false,
			error: true,
		};
		const wrapper: ShallowWrapper = shallow(<Status status={status} />);
		expect(wrapper.find(Message).length).toBe(1);
		expect(wrapper.find(Loading).length).toBe(0);
	});
	it('on loading true should render Loading', () => {
		const status = {
			ready: false,
			loading: true,
			success: false,
			error: false,
		};
		const wrapper: ShallowWrapper = shallow(<Status status={status} />);
		expect(wrapper.find(Message).length).toBe(0);
		expect(wrapper.find(Loading).length).toBe(1);
	});
	it('on ready should return nothing', () => {
		const status = {
			ready: false,
			loading: false,
			success: false,
			error: false,
		};
		const wrapper: ShallowWrapper = shallow(<Status status={status} />);
		expect(wrapper.find(Message).length).toBe(0);
		expect(wrapper.find(Loading).length).toBe(0);
	});
});
