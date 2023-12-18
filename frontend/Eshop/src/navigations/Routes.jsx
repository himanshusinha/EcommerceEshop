import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';
import AuthNavigation from './AuthNavigation';
import {useSelector} from 'react-redux';

const Routes = () => {
  const {user, accessToken} = useSelector(state => state?.auth);
  console.log(user);
  return (
    <NavigationContainer>
      {user ? <DrawerNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Routes;
