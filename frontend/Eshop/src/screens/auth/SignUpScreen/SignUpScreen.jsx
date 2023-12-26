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
import PickerComp from '../../../components/Modal/PickerComp';
import {useDispatch} from 'react-redux';
import {
  moderateScaleVertical,
  moderateScale,
} from '../../../styles/responsiveSize';
import ButtonComp from '../../../components/Button/ButtonComp';
import images from '../../../constants/images';
import mime from 'mime';
import {signUpAsyncThunk} from '../../../redux/asyncThunk/authAsyncThunk';
import Loader from '../../../components/Loader/Loader';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import routes from '../../../constants/routes';
const SignUpScreen = () => {
  const [selectedImage, setSelectedImage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [imageFile, setImageFile] = useState();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const showModal = () => {
    setModalVisible(true);
  };
  const hideModal = () => {
    setModalVisible(false);
  };
  const setImage = imagePath => {
    console.log('Setting image:', imagePath);

    setSelectedImage(imagePath);
  };
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [badName, setBadName] = useState(false);

  const [email, setEmail] = useState('');
  const [badEmail, setBadEmail] = useState(false);

  const [password, setPassword] = useState('');
  const [badPassword, setBadPassword] = useState(false);

  const [address, setAddress] = useState('');
  const [badAddress, setBadAddress] = useState(false);

  const [city, setCity] = useState('');
  const [badCity, setBadCity] = useState(false);

  const [country, setCountry] = useState('');
  const [badCountry, setBadCountry] = useState(false);

  const [pinCode, setPinCode] = useState('');
  const [badPinCode, setBadPinCode] = useState(false);

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [badAvatar, setBadAvatar] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const checkValidation = () => {
    if (name === null || name.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter name',
      });
    } else if (email === null || email.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter email',
      });
    } else if (password === null || password.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter password',
      });
    } else if (address === null || address.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter address',
      });
    } else if (city === null || city.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter city',
      });
    } else if (country === null || country.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter country',
      });
    } else if (pinCode === null || pinCode.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter pinCode',
      });
    } else {
      signUp();
    }
  };
  const onImageSelect = file => {
    setImageFile(file);
  };

  const signUp = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('address', address);
    formData.append('city', city);
    formData.append('country', country);
    formData.append('pinCode', pinCode);
    if (selectedImage !== '') {
      const file = {
        uri: selectedImage,
        type: 'image/jpeg',
        name: 'profile_image.jpg',
      };
      formData.append('file', file);
    }
    dispatch(signUpAsyncThunk(formData))
      .unwrap()
      .then(res => {
        console.log('res...........', res);
        if (res && res.status === 200) {
          Toast.show({
            type: 'success',
            text1: res.data.message,
          });
          setIsLoading(false);
          navigation.goBack();
        } else {
          setIsLoading(false);
        }
        setName('');
        setEmail('');
        setPassword('');
        setAddress('');
        setCity('');
        setCountry('');
        setPinCode('');
        setSelectedImage('');
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  };
  return (
    <View style={styles.container}>
      <WrapperContainer>
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
              <View>
                <Text style={styles.heading}>Sign Up</Text>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    bottom: moderateScaleVertical(10),
                  }}>
                  <ImageBackground
                    source={
                      selectedImage ? {uri: selectedImage} : images.Profile
                    }
                    blurRadius={2}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 50,
                      overflow: 'hidden',
                      position: 'relative',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={showModal}
                      style={{
                        position: 'absolute',
                        top: '50%', // Position at the center vertically
                        left: '50%', // Position at the center horizontally
                        transform: [{translateX: -15}, {translateY: -15}], // Center the icon
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: colors.themeColor,
                        zIndex: 1000,
                      }}>
                      <Image
                        style={{
                          width: 15,
                          height: 15,
                          tintColor: colors.white,
                        }}
                        source={images.Camera}
                      />
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
                <View style={styles.viewStyle}>
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
              </View>
              <View style={styles.viewStyle}>
                <TextInputWithLabel
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
              <View style={styles.viewStyle}>
                <TextInputWithLabel
                  mode="outlined"
                  label="Address"
                  placeholder="Please Enter Address"
                  outlineColor={colors.color1_light2}
                  activeOutlineColor={colors.color1_light2}
                  textColor={colors.blackOpacity30}
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
                  value={pinCode}
                  autoCapitalize={'none'}
                  onChangeText={e => setPinCode(e)}
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
                text="Sign Up"
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
              <Text style={styles.signUpText}>Already have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}>
                <Text style={styles.signUpButton}> Login</Text>
              </TouchableOpacity>
            </View>
          </View>
          <PickerComp
            setImageCallback={setImage}
            selectedImage={selectedImage}
            setImageFile={setImageFile}
            setSelectedImage={setSelectedImage}
            imageCancel={images.Close}
            imageCamera={images.Camera}
            imageGallery={images.Gallery}
            visible={modalVisible}
            onCancel={hideModal}
            camera={'Choose from camera'}
            gallery={'Choose from gallery'}
            onRequestClose={() => hideModal()}
          />
        </KeyboardAwareScrollView>
      </WrapperContainer>
    </View>
  );
};

export default SignUpScreen;
