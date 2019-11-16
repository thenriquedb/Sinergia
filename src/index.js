import React from 'react';
import Routes from './routes';

// Redux
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';

import {store, persistor} from './store/index';

export default function App() {
  console.disableYellowBox = true;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}
