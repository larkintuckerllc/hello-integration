import React from 'react';
import { Provider } from 'react-redux';
import Room from './Room';
import store from '../../store';

const App = () => (
  <Provider store={store}>
    <Room />
  </Provider>
);

export default App;
