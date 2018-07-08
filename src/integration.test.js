import Enzyme, { mount } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import React from 'react';
import App from './components/App';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

describe('integration', () => {
  it('initially shows Off', () => {
    const result = 'Off';
    const wrapper = mount(<App />);
    const roomLightEl = wrapper.find('#room__light');
    expect(roomLightEl.text()).toBe(result);
    wrapper.unmount();
  });

  it('button click (when Off) shows On', () => {
    const result = 'On';
    const wrapper = mount(<App />);
    const roomLightEl = wrapper.find('#room__light');
    wrapper.find('button').simulate('click');
    expect(roomLightEl.text()).toBe(result);
    wrapper.unmount();
  });

  it('button click (when On) shows Off', () => {
    const firstResult = 'On';
    const secondResult = 'Off';
    const wrapper = mount(<App />);
    const roomLightEl = wrapper.find('#room__light');
    const buttonEl = wrapper.find('button');
    buttonEl.simulate('click');
    expect(roomLightEl.text()).toBe(firstResult);
    buttonEl.simulate('click');
    expect(roomLightEl.text()).toBe(secondResult);
    wrapper.unmount();
  });
});