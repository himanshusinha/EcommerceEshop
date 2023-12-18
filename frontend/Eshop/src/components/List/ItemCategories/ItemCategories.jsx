import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import styles from './styles';

const ItemCategories = ({item, isSelected, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: isSelected ? colors.themeColor : colors.white,
            borderColor: isSelected
              ? colors.blackOpacity30
              : colors.blackOpacity30,
          },
        ]}
        onPress={onPress}>
        <Text style={{color: isSelected ? colors.white : colors.black}}>
          {item.category}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemCategories;
