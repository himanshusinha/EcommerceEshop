import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import colors from '../../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import routes from '../../../constants/routes';
import {moderateScale} from '../../../styles/responsiveSize';

const ItemProducts = ({item, index, onPress}) => {
  const id = item._id;
  console.log(item._id, '.......id');
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(routes.PRODUCT_DETAILS_SCREEN, {id: id})
      }
      style={styles.container}>
      <View
        onPress={onPress}
        style={[
          styles.itemContainer,
          index % 2 === 0 ? styles.evenBackground : styles.oddBackground,
        ]}>
        <View>
          <Image
            resizeMode="contain"
            source={{uri: item.images[0].url}}
            style={styles.image}
          />
        </View>
        <View style={{top: moderateScale(30)}}>
          <Text
            style={[
              styles.title,
              index % 2 === 0 ? styles.evenText : styles.oddText,
            ]}>
            {item.name}
          </Text>
          <Text
            style={[
              styles.sub_title,
              index % 2 === 0 ? styles.evenText : styles.oddText,
            ]}>
            {item.description.length > 22
              ? `${item.description.slice(0, 22)}...`
              : item.description}
          </Text>
        </View>
        <View style={{top: moderateScale(30)}}>
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
      </View>
    </TouchableOpacity>
  );
};

export default ItemProducts;
