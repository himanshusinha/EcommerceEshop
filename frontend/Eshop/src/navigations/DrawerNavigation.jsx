import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React from 'react';
import routes from '../constants/routes';
import BottomNavigation from './BottomNavigation';
import colors from '../constants/colors';
import CustomDrawer from '../components/CustomDrawer/CustomDrawer';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import images from '../constants/images';
import {moderateScale} from '../styles/responsiveSize';
import {
  AddProductsScreen,
  AdminCategoriesScreen,
  AdminEditProductsScreen,
  AdminOrdersScreen,
  AdminViewProductScreen,
  ChangePasswordScreen,
  ConfirmOrderScreen,
  OrdersScreen,
  PaymentScreen,
  ResetPasswordScreen,
} from '../screens';
import AdminManageImagesScreen from '../screens/admin/adminManageImages/AdminManageImagesScreen';

const Drawer = createDrawerNavigator();

function CustomHeaderLeftButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{paddingStart: 20}}
      onPress={() => {
        navigation.openDrawer();
      }}>
      <View>
        <Image
          source={images.Menu}
          style={{width: moderateScale(25), height: moderateScale(25)}}
        />
      </View>
    </TouchableOpacity>
  );
}
function CustomHeaderRightButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{paddingStart: 20}}
      onPress={() => {
        navigation.navigate(routes.CART_SCREEN);
      }}>
      <View>
        <Image
          source={images.ShopingBag}
          style={{
            width: moderateScale(25),
            height: moderateScale(25),
            marginEnd: moderateScale(10),
          }}
        />
      </View>
    </TouchableOpacity>
  );
}
function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
        headerShown: true,
        drawerActiveBackgroundColor: colors.themeColor,
        drawerActiveTintColor: '#fff',
        headerLeft: () => <CustomHeaderLeftButton />,
        headerRight: () => <CustomHeaderRightButton />,

        // Center the title
        headerTitleAlign: 'center',
        // Customize the title component if needed
        headerTitle: () => (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', color: colors.black}}>
              E-Shop
            </Text>
          </View>
        ),
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen component={BottomNavigation} name={routes.HOME_SCREEN} />
      <Drawer.Screen
        component={ResetPasswordScreen}
        name={routes.RESET_PASSWORD_SCREEN}
      />
      <Drawer.Screen
        component={ChangePasswordScreen}
        name={routes.CHANGE_PASSWORD_SCREEN}
      />
      <Drawer.Screen
        component={AddProductsScreen}
        name={routes.ADD_PRODUCT_SCREEN}
      />
      <Drawer.Screen
        component={AdminOrdersScreen}
        name={routes.ADMIN_ORDERS_SCREEN}
      />

      <Drawer.Screen
        component={AdminViewProductScreen}
        name={routes.ADMIN_VIEW_PRODUCT_SCREEN}
      />
      <Drawer.Screen
        component={AdminCategoriesScreen}
        name={routes.ADMIN_CATEGORIES_SCREEN}
      />
      <Drawer.Screen
        component={AdminEditProductsScreen}
        name={routes.ADMIN_EDIT_PRODUCTS_SCREEN}
      />
      <Drawer.Screen
        component={AdminManageImagesScreen}
        name={routes.ADMIN_MANANGE_IMAGE_SCREEN}
      />
      <Drawer.Screen
        component={ConfirmOrderScreen}
        name={routes.CONFIRM_ORDER_SCREEN}
      />
      <Drawer.Screen component={PaymentScreen} name={routes.PAYMENT_SCREEN} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
