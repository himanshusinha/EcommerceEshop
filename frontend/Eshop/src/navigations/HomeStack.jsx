import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CartScreen, HomeScreen, ProductDetailsScreen} from '../screens';
import routes from '../constants/routes';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen
        name={routes.PRODUCT_DETAILS_SCREEN}
        component={ProductDetailsScreen}
      />
      <Stack.Screen name={routes.CART_SCREEN} component={CartScreen} />
    </Stack.Navigator>
  );
}
