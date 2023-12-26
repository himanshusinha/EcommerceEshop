import React, {useEffect, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './styles';
import moment from 'moment';
import colors from '../../../constants/colors';
import ButtonComp from '../../Button/ButtonComp';
import {moderateScale} from 'react-native-size-matters';
import {
  getAdminOrderAsyncThunk,
  processOrderByIdThunk,
} from '../../../redux/asyncThunk/authAsyncThunk';
import {useDispatch} from 'react-redux';
import Toast from 'react-native-toast-message';
const ItemAdminProcessOrders = ({item, index}) => {
  const dispatch = useDispatch();
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

  useEffect(() => {
    dispatch(getAdminOrderAsyncThunk())
      .unwrap()
      .then(res => {
        console.log(res?.data, '......res from process order thunk');
        const ids = res?.data?.orders?.map(order => order?._id);
        setOrdersList(res?.data?.orders);
        setOrdersId(ids);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const updateOrdersById = async () => {
    try {
      const res = await dispatch(
        processOrderByIdThunk({id: item?._id}),
      ).unwrap();
      console.log(res, res?.data?.message);
      Toast.show({
        type: 'success',
        text1: res.data.message,
      });
      getAdminOrderAsyncThunk();
    } catch (err) {
      console.log(err);
      // Handle error, if needed
    }
  };

  return (
    <>
      <View>
        <Pressable>
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

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingBottom: 10,
                }}>
                <ButtonComp
                  onPress={() => updateOrdersById()}
                  text="Update"
                  textStyle={{fontSize: moderateScale(14), fontWeight: 'bold'}}
                  style={{
                    width: moderateScale(100),
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: moderateScale(35),
                    backgroundColor:
                      index % 2 == 0 ? colors.BLACK : colors.themeColor,
                  }}
                />
              </View>
            </View>
          </View>
        </Pressable>
      </View>
    </>
  );
};
export default ItemAdminProcessOrders;
