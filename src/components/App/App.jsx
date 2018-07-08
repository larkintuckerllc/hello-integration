import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../store/reducers';
import Room from './Room';

const App = () => {
  const store = createStore(reducers); // MOVED INTO RENDER FOR TESTABILITY
  return (
    <Provider store={store}>
      <Room />
    </Provider>
  );
}

export default App;
