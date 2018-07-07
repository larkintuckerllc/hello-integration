import Enzyme, { shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import React from 'react';
import { createMockStore } from 'redux-test-utils';
import Room from './Room';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

describe('Room component', () => {
  it('shallow renders without crashing', () => {
    const store = createMockStore({
      on: false,
    });
    const context = {
      store,
    };
    shallow(<Room />, { context });
  });
});
