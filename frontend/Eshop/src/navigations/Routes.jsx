import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';
import AuthNavigation from './AuthNavigation';
import {useSelector} from 'react-redux';

const Routes = () => {
  const {accessToken, user} = useSelector(state => state?.auth);
  return (
    <NavigationContainer>
      {user ? <DrawerNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Routes;
