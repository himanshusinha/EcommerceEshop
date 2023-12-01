import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const ItemSearch = ({item}) => {
  return (
    <View style={styles.listItem}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.textContainer}>
        <Text>{item.title}</Text>
      </View>
    </View>
  );
};

export default ItemSearch;
