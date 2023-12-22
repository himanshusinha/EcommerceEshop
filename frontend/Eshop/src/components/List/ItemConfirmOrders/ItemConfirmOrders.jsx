import React from 'react';
import {Image, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {moderateScale} from '../../../styles/responsiveSize';
import colors from '../../../constants/colors';
const ItemConfirmOrders = ({item}) => {
  const {cart} = useSelector(state => state?.cart);
  console.log(cart, '.....cart checkout');
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        marginVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: colors.WHITE,
        ...Platform.select({
          ios: {
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
          },
          android: {
            elevation: 2,
          },
        }),
      }}>
      <Image
        resizeMode="contain"
        source={{uri: item.image}}
        style={{height: moderateScale(60), width: moderateScale(60)}}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Text>
          {item.quantity} * ₹ {item.price}
        </Text>
      </View>
    </View>
  );
};
export default ItemConfirmOrders;
