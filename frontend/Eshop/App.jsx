import React from 'react';
import {PaperProvider} from 'react-native-paper';
import Routes from './src/navigations/Routes';
import {persistor, store} from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import axios from 'axios';

const App = () => {
  const baseurl = 'https://eshop-dqns.onrender.com';

  axios.defaults.baseURL = baseurl;
  return (
    <PaperProvider>
      <Provider store={store}>
        <PersistGate loading={true} persistor={persistor}>
          <Routes />
          <Toast topOffset={50} />
        </PersistGate>
      </Provider>
    </PaperProvider>
  );
};

export default App;
