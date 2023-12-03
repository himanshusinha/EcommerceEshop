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
import {
  getProfileAsyncThunk,
  signUpAsyncThunk,
  updateProfileAsyncThunk,
  updateProfilePicAsyncThunk,
} from '../../../redux/asyncThunk/authAsyncThunk';
import Loader from '../../../components/Loader/Loader';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
const ProfileScreen = () => {
  const [selectedImage, setSelectedImage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [profile, setProfile] = useState();
  const [imageFile, setImageFile] = useState();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const hideModal = () => {
    setModalVisible(false);
  };
  const setImage = imagePath => {
    console.log('Setting image:', imagePath);

    setSelectedImage(imagePath);
  };
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [address, setAddress] = useState('');

  const [city, setCity] = useState('');

  const [country, setCountry] = useState('');

  const [pinCode, setPinCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onImageSelect = file => {
    setImageFile(file);
  };
  useEffect(() => {
    getProfile();
  }, []);
  const showModal = () => {
    setModalVisible(true);
  };
  const getProfile = () => {
    setIsLoading(true);
    dispatch(getProfileAsyncThunk())
      .unwrap()
      .then(res => {
        console.log(res.data.user, '.......response from get profile');
        if (res && res.status === 200) {
          const userProfile = res.data.user;
          setProfile(userProfile.avatar.url);
          setName(userProfile.name || ''); // set default value if null
          setEmail(userProfile.email || '');
          setPassword(userProfile.password || '');
          setAddress(userProfile.address || '');
          setCity(userProfile.city || '');
          setCountry(userProfile.country || '');
          setPinCode(userProfile.pinCode ? userProfile.pinCode.toString() : ''); // convert to string if pinCode is a number
          setIsLoading(false);
        }
      })
      .catch(err => {
        console.error(err); // Log any potential errors
        setIsLoading(false);
      });
  };

  const onUpdateProfile = async values => {
    setIsLoading(true);
    console.log(values);

    const formData = new FormData();

    if (selectedImage !== '') {
      formData.append('file', {
        uri: selectedImage,
        type: 'image/jpeg',
        name: 'profile_image.jpg',
      });
    }
    try {
      await dispatch(updateProfilePicAsyncThunk(formData));
      Toast.show({
        type: 'success',
        text1: 'Profile Pic Updated Successfully',
      });
      await dispatch(
        updateProfileAsyncThunk({name, email, address, city, country, pinCode}),
        Toast.show({
          type: 'success',
          text1: 'Profile Updated Successfully',
        }),
      );
      setIsLoading(false);

      // Show success message or perform any additional actions
    } catch (error) {
      console.log('Failed to update profile:', error);
      setIsLoading(false);
    }
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
                <Text style={styles.heading}>Update Profile</Text>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    bottom: moderateScaleVertical(10),
                  }}>
                  <ImageBackground
                    source={
                      selectedImage
                        ? {uri: selectedImage}
                        : profile
                        ? {uri: profile}
                        : images.Profile
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
                text="Update Profile"
                textStyle={{
                  color: colors.white,
                  fontWeight: 'bold',
                }}
                style={{
                  width: '90%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={onUpdateProfile}
              />
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

export default ProfileScreen;
