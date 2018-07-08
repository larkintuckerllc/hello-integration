import Enzyme, { shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import React from 'react';
import RoomView from './RoomView';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

const getDefaultProps = () => ({
  on: false,
  toggleOn: jest.fn(),
});

describe('RoomView component', () => {
  it('shallow renders without crashing (off)', () => {
    const result = 'Off';
    const defaultProps = getDefaultProps();
    const wrapper = shallow(<RoomView {...defaultProps} />);
    const roomLightEl = wrapper.find('#room__light');
    expect(roomLightEl.text()).toBe(result);
  });

  it('shallow renders without crashing (on)', () => {
    const result = 'On';
    const { on, ...defaultProps } = getDefaultProps();
    const wrapper = shallow(<RoomView on={true} {...defaultProps} />);
    const roomLightEl = wrapper.find('#room__light');
    expect(roomLightEl.text()).toBe(result);
  });
});