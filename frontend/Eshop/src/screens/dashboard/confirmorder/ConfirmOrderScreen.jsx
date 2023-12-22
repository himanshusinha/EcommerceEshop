import {View, Text, Dimensions, FlatList, Modal} from 'react-native';
import React, {useEffect, useState} from 'react';
import WrapperContainer from '../../../components/WrapperContainer/WrapperContainer';
import colors from '../../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import ItemConfirmOrders from '../../../components/List/ItemConfirmOrders/ItemConfirmOrders';
import ButtonComp from '../../../components/Button/ButtonComp';
import {moderateScale} from '../../../styles/responsiveSize';
import routes from '../../../constants/routes';

const ConfirmOrderScreen = () => {
  const [price, setPrice] = useState(0);
  const {cart} = useSelector(state => state?.cart);

  useEffect(() => {
    const totalPrice = cart.reduce((total, item) => {
      const itemTotal =
        item.price && item.quantity ? item.price * item.quantity : 0;
      return total + itemTotal;
    }, 0);
    setPrice(totalPrice);
  }, [cart]);

  const [shippingCharges] = useState(itemsPrice > 10000 ? 0 : 200);
  const [itemsPrice] = useState(
    cart.reduce((prev, curr) => prev + curr.quantity * curr.price, 0),
  );
  const taxPrice = Math.floor((parseFloat(0.8) * parseFloat(itemsPrice)) / 100);

  const totalAmount = itemsPrice + taxPrice + shippingCharges;

  console.log(totalAmount, '......totalAmount');
  console.log(taxPrice, '.......taxPrices');
  console.log(shippingCharges, '.........shipping chargess');
  console.log(itemsPrice, '.......itemsPrice');
  const navigation = useNavigation();
  return (
    <WrapperContainer>
      <View
        style={{
          height: Dimensions.get('window').height,
        }}>
        <View style={{flex: 0.82}}>
          <FlatList
            bounces={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 20,
            }}
            data={cart}
            renderItem={({item}) => <ItemConfirmOrders item={item} />}
            keyExtractor={item => item.id}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            bottom: 5,
            paddingHorizontal: 20,
          }}>
          <View style={{bottom: moderateScale(30)}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                paddingBottom: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <Text style={{fontWeight: 'bold', color: colors.BLACK}}>
                  SubTotal
                </Text>
                <Text style={{fontWeight: '400', color: colors.BLACK}}>
                  {' '}
                  ₹ {itemsPrice}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  paddingBottom: 5,
                }}>
                <Text style={{fontWeight: 'bold', color: colors.BLACK}}>
                  Shipping
                </Text>
                <Text style={{fontWeight: '400', color: colors.BLACK}}>
                  {' '}
                  {shippingCharges}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  paddingBottom: 5,
                }}>
                <Text style={{fontWeight: 'bold', color: colors.BLACK}}>
                  Tax
                </Text>
                <Text style={{fontWeight: '400', color: colors.BLACK}}>
                  {taxPrice}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                paddingBottom: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <Text style={{fontWeight: 'bold', color: colors.BLACK}}>
                  Total
                </Text>
                <Text style={{fontWeight: '400', color: colors.BLACK}}>
                  ₹ {totalAmount}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: 15, bottom: moderateScale(20)}}>
          <ButtonComp
            onPress={() =>
              navigation.navigate(routes.PAYMENT_SCREEN, {
                totalAmount: totalAmount,
                taxPrice: taxPrice,
                shippingCharges: shippingCharges,
                itemsPrice: itemsPrice,
              })
            }
            text="Payment"
            textStyle={{color: colors.WHITE}}
            style={{backgroundColor: colors.themeColor}}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default ConfirmOrderScreen;
