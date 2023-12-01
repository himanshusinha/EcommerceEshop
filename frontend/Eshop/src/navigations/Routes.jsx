import {View, Text} from 'react-native';
import React from 'react';
import AppNavigation from './AppNavigation';
import DrawerNavigation from './DrawerNavigation';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';

const Routes = () => {
  return (
    <NavigationContainer>
      {true ? <DrawerNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Routes;
