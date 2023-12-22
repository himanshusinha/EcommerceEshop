// RadioButton.js

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import styles from './styles';

const RadioButton = ({options, selectedOption, onSelect}) => {
  return (
    <View>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionContainer}
          onPress={() => onSelect(option)}>
          <View style={styles.radioCircle}>
            {selectedOption === option && <View style={styles.selectedRb} />}
          </View>
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RadioButton;
