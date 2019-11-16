import {createStore} from 'redux';
import AsyncStoreage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import reducers from './reducers/index';

const persistreducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStoreage,
    whitelist: ['houseReducer'],
  },
  reducers,
);
const store = createStore(persistreducer);
const persistor = persistStore(store);

export {store, persistor};
