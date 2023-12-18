import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import {moderateScale} from '../../../styles/responsiveSize';
import Toast from 'react-native-toast-message';
import ButtonComp from '../../Button/ButtonComp';

const ItemProductDetails = ({item, index}) => {
  console.log(item?.name, '......item product details');
  const addToCart = () => {
    Toast.show({
      type: 'success',
      text1: 'Item added to cart',
    });
  };

  return (
    <View style={styles.container} key={index}>
      <Image resizeMode="contain" source={item.image} style={styles.image} />
      <View showsVerticalScrollIndicator={false}>
        <Text>Product Name : {item.name}</Text>
        <View style={{paddingTop: moderateScale(20)}}>
          <Text style={{textAlign: 'justify'}}>
            Product Name : {item.description}
          </Text>
        </View>
      </View>
      <View style={styles.btnRowStyle}>
        <View style={{flex: 0.5}}>
          <ButtonComp text="Add to cart" />
        </View>
        <View style={styles.addToCartContainer}>
          <ButtonComp text="-" style={styles.btnCompStyle} />
          <Text style={styles.btnCountStyle}>0</Text>
          <ButtonComp text="+" style={styles.btnCompStyle} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addToCartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.4,
    width: '50%',
    alignItems: 'center',
  },
  btnCountStyle: {
    fontSize: moderateScale(18),
    color: 'black',
  },
  btnRowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
  },
  btnCompStyle: {width: 50},

  container: {
    borderRadius: 8,
    shadowColor: '#000',
    backgroundColor: 'red',
  },
  image: {
    width: moderateScale(200),
    height: moderateScale(200),
  },
  header: {
    color: '#222',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default ItemProductDetails;
