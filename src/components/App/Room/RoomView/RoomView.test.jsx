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
    const defaultProps = getDefaultProps();
    const wrapper = shallow(<RoomView {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('shallow renders without crashing (on)', () => {
    const { on, ...defaultProps } = getDefaultProps();
    const wrapper = shallow(<RoomView on={true} {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});