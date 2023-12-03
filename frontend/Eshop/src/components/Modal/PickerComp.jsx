import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  Platform,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import styles from './styles';
import ImagePicker from 'react-native-image-crop-picker';
import {androidCameraPermission} from '../../utils/permissions';

const PickerComp = props => {
  const {selectedImage, setSelectedImage, setImageFile, onCancel} = props;

  const onSelectImage = async () => {
    const permissionStatus = await androidCameraPermission();
    if (permissionStatus || Platform.OS == 'ios') {
      onCamera();
    }
  };

  const onGallery = async () => {
    try {
      const granted = await androidCameraPermission();
      if (granted) {
        // Continue to ask for gallery permissions
        const galleryPermissionStatus = await androidGalleryPermission();
        if (galleryPermissionStatus) {
          const res = await ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
          });

          const fileName = res.path.split('/').pop();

          const file = {
            uri: res?.path,
            type: res?.mime,
            name: fileName,
          };

          setImageFile(file);
          setSelectedImage(res?.path);
          onCancel();
        } else {
          console.warn('Gallery permission denied');
          // Handle the case when the gallery permission is denied
        }
      } else {
        console.warn('Camera permission denied');
        // Handle the case when the camera permission is denied
      }
    } catch (error) {
      console.warn(error);
    }
  };
  const androidGalleryPermission = async () => {
    try {
      if (Platform.OS === 'android' && Platform.Version > 22) {
        const permissions = [
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ];

        const granted = await PermissionsAndroid.requestMultiple(permissions);

        for (const permission in granted) {
          if (granted[permission] !== 'granted') {
            console.error(
              `Permission ${permission} not granted. Please allow permissions.`,
            );
            return false;
          }
        }

        return true;
      }

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  const onCamera = async () => {
    try {
      const granted = await androidCameraPermission();
      if (granted) {
        const res = await ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
        });

        const fileName = res.path.split('/').pop();

        const file = {
          uri: res?.path,
          type: res?.mime,
          name: fileName,
        };

        setImageFile(file);
        setSelectedImage(res?.path);
        onCancel();
      } else {
        console.warn('Camera permission denied');
        // Handle the case when the permission is denied
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <View style={styles.modalContainer}>
      <Modal
        onRequestClose={onCancel}
        visible={props.visible}
        transparent={true}
        animationType="slide">
        <TouchableOpacity
          onPressOut={onCancel}
          style={styles.modalInnerView}
          onPressIn={onCancel}>
          <View style={styles.modalImageContainer}>
            <TouchableOpacity onPress={onCancel} style={styles.btnCancel}>
              <Image
                resizeMode="contain"
                style={styles.imageCancel}
                source={props.imageCancel}
              />
            </TouchableOpacity>
            <View style={styles.cameraContainer}>
              <TouchableOpacity
                style={styles.btnCamera}
                onPress={() => onSelectImage()}>
                <Image
                  resizeMode="contain"
                  style={styles.imageCamera}
                  source={props.imageCamera}
                />
                <View style={{marginHorizontal: 6}}></View>
                <Text style={styles.cameraText}>{props.camera}</Text>
              </TouchableOpacity>
              <View style={{marginVertical: 4}}></View>
              <TouchableOpacity
                onPress={() => onGallery()}
                style={styles.gallerybtn}>
                <Image
                  resizeMode="contain"
                  style={styles.galleryImage}
                  source={props.imageGallery}
                />
                <View style={{marginHorizontal: 5}}></View>
                <Text style={styles.galleryText}>{props.gallery}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default PickerComp;
