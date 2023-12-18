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

import {
  forgotPasswordThunk,
  loginAsyncThunk,
} from '../../../redux/asyncThunk/authAsyncThunk';
import Loader from '../../../components/Loader/Loader';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import images from '../../../constants/images';
const ForgotPasswordScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const checkValidation = () => {
    if (email === null || email.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter email',
      });
    } else forgotPassword();
  };

  const forgotPassword = async () => {
    setIsLoading(true);

    try {
      const res = await dispatch(forgotPasswordThunk({email}));
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
                <Text style={styles.heading}>Forgot Password</Text>

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

export default ForgotPasswordScreen;
