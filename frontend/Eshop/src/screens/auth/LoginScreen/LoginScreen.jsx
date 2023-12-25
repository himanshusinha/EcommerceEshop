import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  Modal,
} from 'react-native';
import TextInputWithLabel from '../../../components/InputField/TextInputWithLabel';
import colors from '../../../constants/colors';
import styles from './styles';
import WrapperContainer from '../../../components/WrapperContainer/WrapperContainer';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {moderateScale} from '../../../styles/responsiveSize';
import ButtonComp from '../../../components/Button/ButtonComp';

import {loginAsyncThunk} from '../../../redux/asyncThunk/authAsyncThunk';
import Loader from '../../../components/Loader/Loader';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import routes from '../../../constants/routes';
import {moderateVerticalScale} from 'react-native-size-matters';
import images from '../../../constants/images';
import {setAccessToken} from '../../../redux/slices/auth.slices';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const checkValidation = () => {
    if (email === null || email.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter name',
      });
    } else if (password === null || password.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter password',
      });
    } else {
      login();
    }
  };
  const login = async () => {
    dispatch(loginAsyncThunk({email, password}))
      .unwrap()
      .then(res => {
        if (res && res.status === 200) {
          Toast.show({
            type: 'success',
            text1: res.data.message,
          });
          setIsLoading(false);
        } else {
          Toast.show({
            type: 'error',
            text1: 'Incorrect Email Or Password',
          });
          setIsLoading(false);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <WrapperContainer contentContainerStyle={styles.scrollStyle}>
        {isLoading ? (
          <Modal>
            <Loader />
          </Modal>
        ) : null}
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollStyle}>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <View style={styles.viewStyle}>
                <Text style={styles.heading}>Login</Text>

                <TextInputWithLabel
                  leftIcon={images.Email}
                  mode="outlined"
                  label="Email"
                  placeholder="Please Enter Email"
                  outlineColor={colors.color1_light2}
                  activeOutlineColor={colors.color1_light2}
                  textColor={colors.blackOpacity30}
                  value={email}
                  autoCapitalize={'none'}
                  onChangeText={e => setEmail(e)}
                />
              </View>
              <View style={styles.viewStyle}>
                <TextInputWithLabel
                  leftIcon={images.Lock}
                  rightIcon={images.Hide}
                  mode="outlined"
                  label="Password"
                  placeholder="Please Enter Password"
                  outlineColor={colors.color1_light2}
                  activeOutlineColor={colors.color1_light2}
                  textColor={colors.blackOpacity30}
                  value={password}
                  autoCapitalize={'none'}
                  onChangeText={e => setPassword(e)}
                  secureTextEntry={true}
                />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  marginTop: moderateVerticalScale(20),
                }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(routes.FORGOT_PASSWORD_SCREEN)
                  }>
                  <Text style={{color: colors.themeColor}}>
                    Forgot Password ?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                bottom: moderateScale(20),
              }}>
              <ButtonComp
                text="Login"
                textStyle={{
                  color: colors.white,
                  fontWeight: 'bold',
                }}
                style={{
                  width: '90%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={checkValidation}
              />
            </View>
            <View style={styles.bottomContainer}>
              <Text style={styles.signUpText}>Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate(routes.SIGN_UP_SCREEN)}>
                <Text style={styles.signUpButton}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </WrapperContainer>
    </View>
  );
};

export default LoginScreen;
