import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import PickerComp from '../../../components/Modal/PickerComp';
import {useDispatch} from 'react-redux';
import {useIsFocused, useRoute} from '@react-navigation/native';
import {
  addAdminProductsImagesByIdThunk,
  deleteAdminProductImageByIdThunk,
  getProductDetailsByIdThunk,
} from '../../../redux/asyncThunk/authAsyncThunk';
import {moderateScale} from '../../../styles/responsiveSize';
import images from '../../../constants/images';
import WrapperContainer from '../../../components/WrapperContainer/WrapperContainer';
import ButtonComp from '../../../components/Button/ButtonComp';
import Toast from 'react-native-toast-message';
import Loader from '../../../components/Loader/Loader';

const AdminManageImagesScreen = () => {
  const routes = useRoute();
  const [selectedImage, setSelectedImage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [imageFile, setImageFile] = useState();
  const isFocused = useIsFocused();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const id = routes?.params?.id;
  console.log(id, '...........product id');
  const [getImage, setGetImage] = useState([]);
  const [imagesId, setImagesId] = useState([]);
  console.log(imagesId, '.........images iddd');
  const setImage = imagePath => {
    console.log('Setting image:', imagePath);

    setSelectedImage(imagePath);
  };
  console.log(getImage);

  const showModal = () => {
    setModalVisible(true);
  };
  const hideModal = () => {
    setModalVisible(false);
  };
  useEffect(() => {
    setIsLoading(true);
    dispatch(getProductDetailsByIdThunk({id: id}))
      .unwrap()
      .then(res => {
        console.log(res?.data, '......res from edit products thunk');
        const fetchedImageURL = JSON.stringify(
          console.log(
            res?.data?.product?.images,
            '...........images of fetchedurl',
          ),

          setGetImage(res?.data?.product?.images || []),
          setIsLoading(false),
        );
        const imageIds = res?.data?.product?.images.map(image => image._id);
        console.log(imageIds, '......image IDs from manage images thunk');

        setImagesId(imageIds);
        setIsLoading(false);

        if (fetchedImageURL) {
          setSelectedImage(fetchedImageURL);
        }
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, [isFocused]);

  const addImages = () => {
    setIsLoading(true);

    const formData = new FormData();
    if (!selectedImage) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please select an image before adding.',
      });
      setIsLoading(false);

      return;
    }
    const file = {
      uri: selectedImage,
      type: 'image/jpeg',
      name: 'profile_image.jpg',
    };
    formData.append('file', file);

    dispatch(addAdminProductsImagesByIdThunk({formData, id: id}))
      .unwrap()
      .then(res => {
        const formData = new FormData();

        const file = {
          uri: selectedImage,
          type: 'image/jpeg',
          name: 'profile_image.jpg',
        };
        formData.append('file', file);
        const imageIds = res?.data.map(image => image._id);
        console.log(imageIds, '......image IDs from manage images thunk');
        setImagesId(imageIds);
      })
      .catch(err => {
        if (err.response) {
          // The request was made and the server responded with a status outside of the range of 2xx
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
          setIsLoading(false);
        } else if (err.request) {
          // The request was made but no response was received
          console.log(err.request);
          setIsLoading(false);
        } else {
          // Something happened in setting up the request that triggered an error
          console.log('Error', err.message);
          setIsLoading(false);
        }
        setIsLoading(false);

        console.log(err.config);
      });
  };

  const handleDeleteProductImageById = async imageIdToDelete => {
    setIsLoading(true);
    try {
      const action = await dispatch(
        deleteAdminProductImageByIdThunk({id, imageId: imageIdToDelete}),
      );

      // Check if the action indicates success
      if (deleteAdminProductImageByIdThunk.fulfilled.match(action)) {
        // Handle success
        const updatedImages = getImage.filter(
          image => image._id !== imageIdToDelete,
        );
        setGetImage(updatedImages);
        setImagesId(updatedImages.map(image => image._id));
        setIsLoading(false);
        Toast.show({
          type: 'success',
          text1: res.data.message,
        });
      } else if (deleteAdminProductImageByIdThunk.rejected.match(action)) {
        // Handle error
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2:
            action.error.message ||
            'An error occurred while deleting the image.',
        });
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error deleting image:', error);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'An error occurred while deleting the image.',
      });
      setIsLoading(false);
    }
  };

  return (
    <WrapperContainer>
      {isLoading ? (
        <Modal>
          <Loader />
        </Modal>
      ) : null}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            marginVertical: moderateScale(20),
            width: '95%',
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image
              source={images.Add}
              style={{width: moderateScale(30), height: moderateScale(30)}}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          bounces={false}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={getImage}
          renderItem={({item, index}) => {
            console.log(item, '.........flatlist items'); // Log the item here

            return (
              <View style={{marginHorizontal: moderateScale(20)}}>
                <Image
                  resizeMode="contain"
                  style={{
                    width: moderateScale(200),
                    height: moderateScale(200),
                  }}
                  source={{uri: item.url}} // Use the 'url' property from the item
                />
                <TouchableOpacity
                  onPress={() => {
                    handleDeleteProductImageById(item?._id); // Use imagesId instead of imageIds
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{
                      width: moderateScale(20),
                      height: moderateScale(20),
                      alignSelf: 'center',
                      marginVertical: moderateScale(20),
                    }}
                    source={images.Trash}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={item => item._id}
        />

        <View
          style={{
            marginTop: moderateScale(20),
            width: moderateScale(300),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            resizeMode="cover"
            style={{width: moderateScale(200), height: moderateScale(200)}}
            source={
              selectedImage
                ? {uri: selectedImage}
                : {
                    uri: 'https://www.dexfinity.com/wp-content/plugins/elementor/assets/images/placeholder.png',
                  }
            }
          />
        </View>
        <View style={{marginTop: 20}}>
          <ButtonComp text="Add Images" onPress={() => addImages()} />
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
      </View>
    </WrapperContainer>
  );
};

export default AdminManageImagesScreen;
