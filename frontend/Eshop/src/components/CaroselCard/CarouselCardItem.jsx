import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {moderateScale} from '../../styles/responsiveSize';
import colors from '../../constants/colors';
import Toast from 'react-native-toast-message';
import ButtonComp from '../Button/ButtonComp';

export const SLIDER_WIDTH = Dimensions.get('window').width + 130;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const CarouselCardItem = ({item, index}) => {
  const addToCart = () => {
    Toast.show({
      type: 'success',
      text1: 'Item added to cart',
    });
  };

  return (
    <View style={styles.container} key={index}>
      <Image resizeMode="contain" source={item.image} style={styles.image} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          height: moderateScale(250),
          padding: moderateScale(20), // Use padding instead of paddingLeft and paddingRight
          marginBottom: moderateScale(20),
        }}>
        <Text>Product Name : {item.title}</Text>
        <View style={{paddingTop: moderateScale(20)}}>
          <Text style={{textAlign: 'justify'}}>Product Name : {item.desc}</Text>
        </View>
      </ScrollView>
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
    marginTop: moderateScale(20),
    borderRadius: 8,
    width: ITEM_WIDTH,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
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

export default CarouselCardItem;
