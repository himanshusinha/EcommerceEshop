// LoginScreen.js
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TextInputWithLabel from '../../../components/TextInputWithLabel/TextInputWithLabel';
import colors from '../../../constants/colors';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import WrapperContainer from '../../../components/WrapperContainer/WrapperContainer';

const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [pinCode, setPinCode] = useState('');

  return (
    <WrapperContainer>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollStyle}>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <View>
              <Text style={styles.heading}>Sign Up</Text>
              <TextInputWithLabel
                mode="outlined"
                label="Name"
                placeholder="Please Enter Name"
                outlineColor={colors.color1_light2}
                activeOutlineColor={colors.color1_light2}
                textColor={colors.blackOpacity30}
                value={name}
                autoCapitalize={'none'}
                onChangeText={e => setName(e)}
              />
            </View>
            <View style={styles.viewStyle}>
              <TextInputWithLabel
                mode="outlined"
                label="Email"
                placeholder="Please Enter Email"
                outlineColor={colors.color1_light2}
                activeOutlineColor={colors.color1_light2}
                textColor={colors.blackOpacity30}
                style={styles.inputStyle}
                value={email}
                autoCapitalize={'none'}
                onChangeText={e => setEmail(e)}
              />
            </View>
            <View style={styles.viewStyle}>
              <TextInputWithLabel
                mode="outlined"
                label="Password"
                placeholder="Please Enter Password"
                outlineColor={colors.color1_light2}
                activeOutlineColor={colors.color1_light2}
                textColor={colors.blackOpacity30}
                style={styles.inputStyle}
                value={password}
                autoCapitalize={'none'}
                onChangeText={e => setPassword(e)}
              />
            </View>
            <View style={styles.viewStyle}>
              <TextInputWithLabel
                mode="outlined"
                label="Address"
                placeholder="Please Enter Address"
                outlineColor={colors.color1_light2}
                activeOutlineColor={colors.color1_light2}
                textColor={colors.blackOpacity30}
                style={styles.inputStyle}
                value={address}
                autoCapitalize={'none'}
                onChangeText={e => setAddress(e)}
              />
            </View>
            <View style={styles.viewStyle}>
              <TextInputWithLabel
                mode="outlined"
                label="City"
                placeholder="Please Enter City"
                outlineColor={colors.color1_light2}
                activeOutlineColor={colors.color1_light2}
                textColor={colors.blackOpacity30}
                style={styles.inputStyle}
                value={city}
                autoCapitalize={'none'}
                onChangeText={e => setCity(e)}
              />
            </View>
            <View style={styles.viewStyle}>
              <TextInputWithLabel
                mode="outlined"
                label="Country"
                placeholder="Please Enter Country"
                outlineColor={colors.color1_light2}
                activeOutlineColor={colors.color1_light2}
                textColor={colors.blackOpacity30}
                style={styles.inputStyle}
                value={country}
                autoCapitalize={'none'}
                onChangeText={e => setCountry(e)}
              />
            </View>
            <View style={styles.viewStyle}>
              <TextInputWithLabel
                mode="outlined"
                label="PinCode"
                placeholder="Please Enter PinCode"
                outlineColor={colors.color1_light2}
                activeOutlineColor={colors.color1_light2}
                textColor={colors.blackOpacity30}
                style={styles.inputStyle}
                value={pinCode}
                autoCapitalize={'none'}
                onChangeText={e => setPinCode(e)}
              />
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.signUpText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.signUpButton}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </WrapperContainer>
  );
};

export default SignUpScreen;
