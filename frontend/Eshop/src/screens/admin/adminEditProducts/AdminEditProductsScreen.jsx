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
import {
  getCategoriesThunk,
  getProductDetailsByIdThunk,
  updateAdminProductByIdAsyncThunk,
} from '../../../redux/asyncThunk/authAsyncThunk';
import Loader from '../../../components/Loader/Loader';
import Toast from 'react-native-toast-message';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import SelectComponent from '../../../components/SelectComponent/SelectComponent';
import routes from '../../../constants/routes';
const AdminEditProductsScreen = () => {
  const [selectedImage, setSelectedImage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [imageFile, setImageFile] = useState();
  const [categories, setCategories] = useState([]);
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [category, setCategory] = useState('Choose Category');
  const [categoryID, setCategoryID] = useState(undefined);
  const [visible, setVisible] = useState(false);
  const [profile, setProfile] = useState();

  const navigation = useNavigation();
  const routes = useRoute();
  const id = routes?.params?.id;
  console.log(id, '........params id');
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
  const [name, setName] = useState('');
  console.log(name, '......name');
  const [description, setDescription] = useState('');

  const [price, setPrice] = useState('');

  const [stock, setStock] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const imageUrls = routes?.params?.imageURL;
  console.log(imageUrls, '......imageurl');
  const checkValidation = () => {
    if (name === null || name.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter name',
      });
    } else if (description === null || description.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter email',
      });
    } else if (price === null || price.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter password',
      });
    } else if (stock === null || stock.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter address',
      });
    } else {
      onUpdateAdminProductById();
    }
  };
  const onImageSelect = file => {
    setImageFile(file);
  };
  useEffect(() => {
    setImageUrl(routes.params?.imageURL || '');

    dispatch(getProductDetailsByIdThunk({id: id}))
      .unwrap()
      .then(res => {
        console.log(res?.data, '......res from edit products thunk');
        setName(res?.data?.product.name);
        setDescription(res?.data?.product.description);
        setPrice(String(res?.data?.product.price)); // Convert to string if needed
        setStock(String(res?.data?.product.stock)); // Convert to string if needed
        setCategory(res?.data?.product.category?.category || 'Choose Category');
      })
      .catch(err => {
        console.log(err);
      });
  }, [isFocused]);
  useEffect(() => {
    getCategories();
  }, [isFocused]);

  const getCategories = async () => {
    dispatch(getCategoriesThunk())
      .unwrap()
      .then(res => {
        console.log(res);
        console.log(res?.data, '......res from categories thunk');
        console.log(res?.data?.categories);
        setCategories(res?.data?.categories);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onUpdateAdminProductById = async () => {
    setIsLoading(true);
    const formData = new FormData();

    if (selectedImage !== '') {
      formData.append('file', {
        uri: selectedImage,
        type: 'image/jpeg',
        name: 'profile_image.jpg',
      });
    }

    try {
      const adminProductUpdateResponse = await dispatch(
        updateAdminProductByIdAsyncThunk({
          id,
          name,
          description,
          price,
          stock,
          category: categoryID,
        }),
      )
        .then(
          res => console.log(res),
          Toast.show({
            type: 'success',
            text1: 'Product updated successfully',
          }),
        )
        .catch(err => console.log(err));

      setIsLoading(false);
    } catch (error) {
      console.log('Failed to update profile:', error);
      setIsLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <WrapperContainer>
        {isLoading ? (
          <Modal visible={isLoading}>
            <Loader />
          </Modal>
        ) : null}
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollStyle}>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <View>
                <Text style={styles.heading}>Edit Products</Text>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    bottom: moderateScaleVertical(10),
                  }}>
                  <ImageBackground
                    source={{
                      uri: selectedImage || imageUrl || images.Profile,
                    }}
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
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('AdminManageImagesScreen', {
                        id: id,
                        imageURL: routes?.params?.imageURL,
                      })
                    }
                    style={{marginTop: moderateScaleVertical(20)}}>
                    <Text style={{color: colors.themeColor}}>
                      Manage Images
                    </Text>
                  </TouchableOpacity>
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
                  label="Description"
                  placeholder="Please Enter Description"
                  outlineColor={colors.color1_light2}
                  activeOutlineColor={colors.color1_light2}
                  textColor={colors.blackOpacity30}
                  value={description}
                  autoCapitalize={'none'}
                  onChangeText={e => setDescription(e)}
                />
              </View>

              <View style={styles.viewStyle}>
                <TextInputWithLabel
                  mode="outlined"
                  label="Price"
                  placeholder="Please Enter Price"
                  outlineColor={colors.color1_light2}
                  activeOutlineColor={colors.color1_light2}
                  textColor={colors.blackOpacity30}
                  value={price}
                  autoCapitalize={'none'}
                  onChangeText={e => setPrice(e)}
                />
              </View>
              <View style={styles.viewStyle}>
                <TextInputWithLabel
                  mode="outlined"
                  label="Stock"
                  placeholder="Please Enter Stock"
                  outlineColor={colors.color1_light2}
                  activeOutlineColor={colors.color1_light2}
                  textColor={colors.blackOpacity30}
                  value={stock}
                  autoCapitalize={'none'}
                  onChangeText={e => setStock(e)}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => setVisible(true)}
              style={{
                borderColor: colors.GRAY,
                borderWidth: 1,
                marginHorizontal: moderateScale(20),
                height: moderateScale(50),
                justifyContent: 'center',
                alignItems: 'center',
                bottom: moderateScale(30),
                borderRadius: moderateScale(10),
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  borderRadius: 3,
                }}>
                {category}
              </Text>
            </TouchableOpacity>
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

          <SelectComponent
            categories={categories}
            setCategoryID={setCategoryID}
            setCategory={setCategory}
            visible={visible}
            setVisible={setVisible}
          />
        </KeyboardAwareScrollView>
      </WrapperContainer>
    </View>
  );
};

export default AdminEditProductsScreen;
