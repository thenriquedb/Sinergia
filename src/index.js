import React from 'react';
import Routes from './routes';

import {Provider} from 'react-redux';
import store from './store/index';

export default function App() {
  console.disableYellowBox = true;

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
