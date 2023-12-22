import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import Toast from 'react-native-toast-message';
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from '../../../redux/slices/cart.slice';
import colors from '../../../constants/colors';
import {moderateScale} from '../../../styles/responsiveSize';

const ItemCart = ({id, name, price, image, quantity = 0}) => {
  console.log(image, '......images');
  const dispatch = useDispatch();

  const handleDecrement = () => {
    if (quantity === 1) {
      Toast.show({
        type: 'error',
        text1: 'Item Removed from Cart',
        position: 'top',
        topOffset: moderateScale(80),
      });
      dispatch(removeItem(id));
    } else {
      dispatch(decrementQuantity(id));
    }
  };

  return (
    <View style={styles.cartItemContainer}>
      <Image
        resizeMode="contain"
        style={styles.cartItemImage}
        source={{uri: image}}
      />
      <View style={styles.cartItemInfo}>
        <Text style={styles.cartItemTitle}>{name}</Text>
        <Text style={styles.cartItemPrice}>
          <Text style={styles.cartItemPriceValue}>₹ {price}</Text>
        </Text>
        <View style={styles.cartItemIncrDec}>
          <TouchableOpacity onPress={handleDecrement}>
            <Text style={styles.cartItemButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.cartItemQuantity}>{quantity}</Text>
          <TouchableOpacity onPress={() => dispatch(incrementQuantity(id))}>
            <Text style={styles.cartItemButton}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.cartItemRemoveButton}
          onPress={() => dispatch(removeItem(id))}>
          <Text style={styles.cartItemRemoveButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 4,
    shadowOpacity: 0.4,
    shadowOffset: {width: 0, height: 1},
    backgroundColor: colors.WHITE,
  },
  cartItemImage: {
    width: 120,
    height: 120,
    marginStart: 10,
  },
  cartItemInfo: {
    flex: 1,
  },
  cartItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginHorizontal: 20,
  },
  cartItemPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 5,
  },
  cartItemPriceValue: {
    fontWeight: 'bold',
  },
  cartItemIncrDec: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginHorizontal: 20,
  },
  cartItemButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 10,
  },
  cartItemQuantity: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  cartItemRemoveButton: {
    paddingVertical: 5,
    marginHorizontal: 20,
    borderRadius: 5,
    width: '34%',
  },
  cartItemRemoveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default ItemCart;
