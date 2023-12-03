import {View, Text} from 'react-native';
import React from 'react';
import DrawerNavigation from './DrawerNavigation';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import {useSelector} from 'react-redux';

const Routes = () => {
  const {user} = useSelector(state => state?.auth);

  return (
    <NavigationContainer>
      {user ? <DrawerNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Routes;
