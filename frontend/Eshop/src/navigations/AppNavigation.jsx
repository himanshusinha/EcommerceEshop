import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '../constants/routes';
import {BottomNavigation, CartScreen, ProductDetailsScreen} from '../screens';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.HOME_SCREEN} component={BottomNavigation} />
      <Stack.Screen
        name={routes.PRODUCT_DETAILS_SCREEN}
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
