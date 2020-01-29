import React from 'react';
import Routes from './routes/routes.js';
import SplashScreen from './components/SplashScreen/index'

// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from './store/index';

export default App = () => {
  console.disableYellowBox = true;

  return (
    <Provider store={store}>
      <PersistGate loading={<SplashScreen />} persistor={persistor}>
        <Routes />
        {/* <SplashScreen /> */}
      </PersistGate>
    </Provider>
  );
}




