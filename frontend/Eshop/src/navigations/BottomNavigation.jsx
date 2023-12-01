import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../constants/colors';
import routes from '../constants/routes';
import {ProfileScreen, SearchScreen} from '../screens';
import styles from './styles';
import HomeStack from './HomeStack';

const TabBarButton = ({children, onPress}) => {
  return (
    <TouchableOpacity style={[styles.button, styles.shadow]} onPress={onPress}>
      <View style={styles.buttonView}>{children}</View>
    </TouchableOpacity>
  );
};

const Tab = createBottomTabNavigator();

const BottomNavigation = ({focused}) => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        style: {
          borderTopColor: 'transparent',
        },
      }}>
      <Tab.Screen
        name={routes.HOME_STACK}
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name={focused ? 'home' : 'home'}
              size={25}
              color={focused ? colors.color8 : colors.black}
            />
          ),
        }}
      />

      <Tab.Screen
        name={routes.SEARCH_SCREEN}
        component={SearchScreen}
        options={{
          tabBarIcon: () => (
            <Feather
              name={focused ? 'search' : 'search'}
              size={25}
              color={colors.color2}
            />
          ),
          tabBarButton: props => <TabBarButton {...props} />,
        }}
      />

      <Tab.Screen
        name={routes.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name={focused ? 'user' : 'user'}
              size={25}
              color={focused ? colors.color8 : colors.black}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
