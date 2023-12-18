// UpdateProductComp.js
import React from 'react';
import {View, Modal, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './styles'; // Ensure that styles are correctly defined
import images from '../../constants/images'; // Assuming you have an images file
import ButtonComp from '../Button/ButtonComp'; // Assuming you have a ButtonComp component
import {moderateScale} from 'react-native-size-matters';
import colors from '../../constants/colors';

const UpdateProductComp = ({onCancel, visible, categories, setCategories}) => {
  const checkValidation = () => {
    // Add your validation logic here
    console.log('Validation checked');
  };

  return (
    <View style={styles.modalContainer}>
      <Modal
        onRequestClose={onCancel}
        transparent={true}
        visible={visible}
        animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
          }}>
          <View
            style={{
              width: '90%',
              height: moderateScale(200),
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.WHITE,
              borderRadius: moderateScale(20),
            }}>
            <TouchableOpacity
              style={{marginEnd: moderateScale(10), alignSelf: 'flex-end'}}
              onPress={onCancel}>
              <Image
                source={images.Close}
                style={{
                  width: moderateScale(20),
                  height: moderateScale(20),
                  bottom: moderateScale(20),
                }}
              />
            </TouchableOpacity>
            <TextInput
              value={categories}
              onChangeText={e => setCategories(e)}
              style={{
                width: '90%',
                borderColor: colors.GRAY,
                height: moderateScale(50),
                borderWidth: 1,
                paddingStart: moderateScale(20),
                borderRadius: moderateScale(10),
              }}
              placeholder="Add Categories"
            />
            <ButtonComp
              onPress={() => checkValidation()}
              text="Submit"
              style={{width: '90%', top: moderateScale(20)}}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UpdateProductComp;
