import {View, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import images from '../../constants/images';
import styles from './styles';

const TextInputWithLabel = ({
  value,
  onChangeText,
  placeholder,
  rightIcon,
  leftIcon,
  secureTextEntry,
  placeholderTextColor,
  keyboardType,
  autoCapitalize,
  autoCorrect,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Image source={leftIcon} style={styles.imageStyle} />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={!isPasswordVisible && secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        style={styles.inputStyle}
      />

      {rightIcon && (
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Image
            source={isPasswordVisible ? images.Show : images.Hide}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInputWithLabel;
