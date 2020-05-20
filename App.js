import React from 'react';
import AppNavigattor from './navigation/AppNavigator';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} />
      <AppNavigattor />
    </Provider>
  );
}
