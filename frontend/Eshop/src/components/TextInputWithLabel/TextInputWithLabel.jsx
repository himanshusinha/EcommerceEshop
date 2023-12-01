import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import styles from './styles';
import colors from '../../constants/colors';

const TextInputWithLabel = ({
  placeholder,
  onChangeText,
  value,
  keyboardType,
  mode,
  outlineStyle,
  underlineStyle,
  outlineColor,
  activeOutlineColor,
  textColor,
  contentStyle,
  defaultValue,
  label,
  editable,
  placeholderStyle,
  secureTextEntry,
  autoCapitalize,
  inputStyle = {},
}) => {
  return (
    <View style={{...styles.inputStyle, ...inputStyle}}>
      <TextInput
        label={label}
        mode={mode}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        outlineStyle={outlineStyle}
        underlineStyle={underlineStyle}
        outlineColor={outlineColor}
        activeOutlineColor={activeOutlineColor}
        textColor={textColor}
        contentStyle={contentStyle}
        defaultValue={defaultValue}
        editable={editable}
        style={styles.inputStyle}
        placeholderStyle={placeholderStyle}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
      />
    </View>
  );
};

export default TextInputWithLabel;
