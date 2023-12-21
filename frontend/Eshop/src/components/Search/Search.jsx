import {View, Image, TextInput} from 'react-native';
import React from 'react';
import images from '../../constants/images';
import styles from './styles';

const Search = ({placeholder, value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={images.Search} style={styles.searchIcon} />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default Search;
