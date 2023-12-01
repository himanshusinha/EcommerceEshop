import React from 'react';
import {PaperProvider} from 'react-native-paper';
import Routes from './src/navigations/Routes';
import {persistor, store} from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <PaperProvider>
      <Provider store={store}>
        <PersistGate loading={true} persistor={persistor}>
          <Routes />
          <Toast topOffset={70} />
        </PersistGate>
      </Provider>
    </PaperProvider>
  );
};

export default App;
