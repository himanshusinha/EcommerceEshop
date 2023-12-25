import React from 'react';
import {PaperProvider} from 'react-native-paper';
import Routes from './src/navigations/Routes';
import {persistor, store} from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import {StripeProvider} from '@stripe/stripe-react-native';

export const baseurl = 'https://eshop-dqns.onrender.com';

const App = () => {
  const stripeKey =
    'pk_test_51NDfCkSHz5kWzFj1Fqv3F5MkqBOj4xYgHm0wMzsQ6T19VmAsqkSGLteJDmO9UzuJqX89nF0ebyJTKP2unerThwxj00SusRTxc6';

  axios.defaults.baseURL = baseurl;
  return (
    <PaperProvider>
      <StripeProvider
        threeDSecureParams={{
          backgroundColor: '#fff',
          timeout: 5,
        }}
        merchantIdentifier="6-pack-ecom.com"
        publishableKey={stripeKey}>
        <Provider store={store}>
          <PersistGate loading={true} persistor={persistor}>
            <Routes />
            <Toast top={120} />
          </PersistGate>
        </Provider>
      </StripeProvider>
    </PaperProvider>
  );
};

export default App;
