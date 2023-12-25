import React, {useState} from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import Toast from 'react-native-toast-message';
import routes from '../../../constants/routes';
import {addToCart} from '../../../redux/slices/cart.slice';
import {moderateScale} from '../../../styles/responsiveSize';
const ItemProducts = ({item, index}) => {
  const dispatch = useDispatch();
  const description = item.description;
  console.log(description, '........description');
  const navigation = useNavigation();
  const firstImage =
    item.images && item.images.length > 0 ? item.images[0] : null;

  const handleCart = () => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.imageUrl,
        description: item.description,
      }),
    );
    Toast.show({
      type: 'success',
      text1: 'Product Added to Cart',
      position: 'top',
      topOffset: moderateScale(80),
    });
  };

  return (
    <>
      <Pressable
        onPress={() => {
          navigation.navigate(routes.PRODUCT_DETAILS_SCREEN, {
            item: item,
            id: item.id,
            image: item.imageUrl,
          });
        }}>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <Text style={styles.titleName}>{item.name}</Text>
            <Text style={styles.titlePrice}>{item.price}</Text>
          </View>
          <View>
            <Image
              resizeMode="contain"
              source={{uri: firstImage}}
              style={{width: 160, height: 200, left: 130, top: 40}}
            />
          </View>
          <TouchableOpacity onPress={() => handleCart()} style={styles.btnCart}>
            <Text style={styles.titleCart}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </>
  );
};
export default ItemProducts;
