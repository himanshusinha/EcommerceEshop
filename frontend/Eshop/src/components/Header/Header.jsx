import {Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const Header = ({title, imageBackArrow, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Image source={imageBackArrow} style={styles.backButtonImage} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
