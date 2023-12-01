import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import colors from '../../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import routes from '../../../constants/routes';

const ItemProducts = ({item, index, onPress}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(routes.PRODUCT_DETAILS_SCREEN)}
      style={styles.container}>
      <View
        onPress={onPress}
        style={[
          styles.itemContainer,
          index % 2 === 0 ? styles.evenBackground : styles.oddBackground,
        ]}>
        <View>
          <Image source={item.image} style={styles.image} />
          <Text
            style={[
              styles.title,
              index % 2 === 0 ? styles.evenText : styles.oddText,
            ]}>
            {item.title}
          </Text>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.addToCartButton}>
          <Text
            style={
              ([styles.addToCartText],
              {
                color: index % 2 == 0 ? colors.themeColor : colors.white,
              })
            }>
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ItemProducts;
