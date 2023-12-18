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

import {changePasswordThunk} from '../../../redux/asyncThunk/authAsyncThunk';
import Loader from '../../../components/Loader/Loader';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import images from '../../../constants/images';
const ChangePasswordScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPasssword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const checkValidation = () => {
    if (oldPassword === null || oldPassword.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter old password',
      });
    } else if (newPassword === null || newPassword.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter new password',
      });
    } else {
      changePassword();
    }
  };

  const changePassword = async () => {
    setIsLoading(true);

    dispatch(changePasswordThunk({oldPassword, newPassword}))
      .unwrap()
      .then(res => {
        setIsLoading(false);
        if (res && res.status === 200) {
          Toast.show({
            type: 'success',
            text1: res.data.message,
          });
          setIsLoading(false);
        } else {
          Toast.show({
            type: 'error',
            text1: res.data.message,
          });
          setIsLoading(false);
        }
      })
      .catch(err => {
        console.error(err);

        if (err.response && err.response.data) {
          Toast.show({
            type: 'error',
            text1: err.response.data.message,
          });
          setIsLoading(false);
        } else {
          Toast.show({
            type: 'error',
            text1: err.response.data.message,
          });
          setIsLoading(false);
        }
      })
      .finally(() => {
        setIsLoading(false);
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
                <Text style={styles.heading}>Change Password</Text>

                <TextInputWithLabel
                  leftIcon={images.Email}
                  mode="outlined"
                  placeholder="Please Enter Old Password"
                  outlineColor={colors.color1_light2}
                  activeOutlineColor={colors.color1_light2}
                  textColor={colors.blackOpacity30}
                  value={oldPassword}
                  autoCapitalize={'none'}
                  onChangeText={e => setOldPassword(e)}
                />
              </View>

              <View style={{top: moderateScale(10)}}>
                <TextInputWithLabel
                  leftIcon={images.Email}
                  mode="outlined"
                  placeholder="Please Enter New Password"
                  outlineColor={colors.color1_light2}
                  activeOutlineColor={colors.color1_light2}
                  textColor={colors.blackOpacity30}
                  value={newPassword}
                  autoCapitalize={'none'}
                  onChangeText={e => setNewPasssword(e)}
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
                text="Submit"
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

export default ChangePasswordScreen;
