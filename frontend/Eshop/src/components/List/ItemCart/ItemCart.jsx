import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import ButtonComp from '../../Button/ButtonComp';
import {textScale} from '../../../styles/responsiveSize';

const ItemCart = ({item}) => {
  return (
    <View style={styles.listItem}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.textContainer}>
        <Text>{item.title}</Text>
      </View>
      <View style={styles.addToCartContainer}>
        <ButtonComp
          text="-"
          style={styles.btnCompStyle}
          textStyle={{fontSize: textScale(20)}}
        />
        <Text style={styles.btnCountStyle}>0</Text>
        <ButtonComp text="+" style={styles.btnCompStyle} />
      </View>
    </View>
  );
};

export default ItemCart;
