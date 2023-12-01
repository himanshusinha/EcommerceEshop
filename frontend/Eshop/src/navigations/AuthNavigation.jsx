import React from 'react';
import routes from '../constants/routes';
import {LoginScreen, SignUpScreen} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={routes.SIGN_UP_SCREEN} component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
