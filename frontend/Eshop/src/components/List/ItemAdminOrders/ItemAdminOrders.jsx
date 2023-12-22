import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './styles';
import moment from 'moment';
import colors from '../../../constants/colors';
const ItemAdminOrders = ({item, index}) => {
  console.log(item, '.........item orders');
  const time = moment(item?.createdAt).format('DD-MM-YYYY h:mm:ss A');
  const getOrderStatusColor = status => {
    switch (status) {
      case 'Shipped':
        return colors.ORANGE;
      case 'Delivered':
        return colors.GREEN;
      case 'Preparing':
        return colors.YELLOW;
      case 'Rejected':
        return colors.RED;
      default:
        return colors.color1_light;
    }
  };
  return (
    <>
      <View>
        <Pressable
          onPress={() => {
            //   navigation.navigate(Routes.PRODUCT_DETAILS);
          }}>
          <View style={styles.containerOrder}>
            <View
              style={{
                backgroundColor:
                  index % 2 === 0 ? colors.BLACK : colors.themeColor,
                padding: 10,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                paddingVertical: 20,
              }}>
              <Text
                style={{
                  marginHorizontal: 20,
                  color: index % 2 === 0 ? colors.WHITE : colors.WHITE,
                }}>
                ID {''}
                {''} {''} {''} {''} {''} {''} {''} {''} {''} {''}
                {''} {''} {''} {''} {''} {''} {''} {''} {item?._id}
              </Text>
            </View>
            <View
              style={{
                marginTop: 20,
              }}>
              <Text
                style={{
                  marginHorizontal: 20,
                  marginVertical: 5,
                  fontWeight: 'bold',
                }}>
                Address {''} {''} {''} {''}
                {''} {''} {''} {''} {''} {''} {''}
                {''}
                {item?.shippingInfo?.address}
              </Text>
              <Text
                style={{
                  marginHorizontal: 20,
                  marginVertical: 5,
                  fontWeight: 'bold',
                }}>
                Ordered On {''}
                {''}
                {''} {''}
                {''} {''}
                {time}
              </Text>
              <Text
                style={{
                  marginHorizontal: 20,
                  marginVertical: 5,
                  fontWeight: 'bold',
                }}>
                Price {''} {''}
                {''} {''} {''}
                {''} {''} {''} {''} {''} {''} {''}
                {''}
                {''} {''} {''} {''}
                {''} {''} {''} {''}
                {''}Rs {item?.orderItems[0]?.price}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    marginHorizontal: 20,
                    marginVertical: 5,
                    fontWeight: 'bold',
                  }}>
                  Status {''}
                  {''}
                </Text>
                <View
                  style={{
                    marginHorizontal: 20,
                    marginVertical: 5,
                    backgroundColor: getOrderStatusColor(item?.orderStatus),
                    paddingHorizontal: 50,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      marginTop: 5,
                      bottom: 3,
                      fontWeight: 'bold',
                      color: colors.WHITE,
                    }}>
                    {item?.orderStatus}
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  marginHorizontal: 20,
                  marginVertical: 5,
                  fontWeight: 'bold',
                  paddingBottom: 10,
                }}>
                Payment {''} {''} {''} {''}
                {''} {''} {''} {''} {''} {''}
                {item?.paymentMethod}
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
    </>
  );
};
export default ItemAdminOrders;
