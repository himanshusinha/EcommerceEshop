import React, {useState} from 'react';
import {View, Text, Modal} from 'react-native';
import TextInputWithLabel from '../../../components/InputField/TextInputWithLabel';
import colors from '../../../constants/colors';
import styles from './styles';
import WrapperContainer from '../../../components/WrapperContainer/WrapperContainer';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {moderateScale} from '../../../styles/responsiveSize';
import ButtonComp from '../../../components/Button/ButtonComp';

import Loader from '../../../components/Loader/Loader';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import images from '../../../constants/images';
import {resetPasswordThunk} from '../../../redux/asyncThunk/authAsyncThunk';
const ResetPasswordScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const checkValidation = () => {
    if (otp === null || password.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter email',
      });
    } else resetPassword();
  };

  const resetPassword = async () => {
    setIsLoading(true);

    try {
      const res = await dispatch(resetPasswordThunk({otp, password}));
      setIsLoading(false);

      console.log('API Response:', res);

      if (res && res.status === 200) {
        const successMessage = res.payload.message;
        Toast.show({
          type: 'success',
          text1: successMessage,
        });
      } else if (res && res.payload && res.payload.message) {
        const errorMessage = res.payload.message;
        Toast.show({
          type: 'success',
          text1: errorMessage,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'An error occurred. Please check the server response.',
        });
      }
    } catch (err) {
      console.error(err);
      Toast.show({
        type: 'error',
        text1: 'An error occurred. Please check your network connection.',
      });
    } finally {
      setIsLoading(false);
    }
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
                <Text style={styles.heading}>Reset Password</Text>

                <TextInputWithLabel
                  leftIcon={images.Email}
                  mode="outlined"
                  label="Otp"
                  placeholder="Please Enter Otp"
                  outlineColor={colors.color1_light2}
                  activeOutlineColor={colors.color1_light2}
                  textColor={colors.blackOpacity30}
                  value={otp}
                  autoCapitalize={'none'}
                  onChangeText={e => setOtp(e)}
                />
              </View>
              <View style={styles.inputStyle}>
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
                />
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                bottom: moderateScale(20),
              }}>
              <ButtonComp
                text="Send"
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
          </View>
        </KeyboardAwareScrollView>
      </WrapperContainer>
    </View>
  );
};

export default ResetPasswordScreen;
