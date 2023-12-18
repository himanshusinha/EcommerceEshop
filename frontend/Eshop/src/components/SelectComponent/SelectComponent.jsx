import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  Image,
  FlatList,
} from 'react-native';
import {Avatar, Headline} from 'react-native-paper';
import styles from './styles';
import colors from '../../constants/colors';
import images from '../../constants/images';
import {moderateScale} from 'react-native-size-matters';
import WrapperContainer from '../WrapperContainer/WrapperContainer';

const SelectComponent = ({
  visible,
  setVisible,
  setCategory,
  setCategoryID,
  categories = [],
  onCancel,
}) => {
  const selectCategoryHandler = item => {
    setCategory(item.category);
    setCategoryID(item._id);
    setVisible(false);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <View style={styles.modalContainer}>
      <WrapperContainer>
        <Modal
          onRequestClose={onCancel}
          visible={visible}
          transparent={true}
          animationType="slide">
          <View
            style={{
              flex: 1,
              backgroundColor: colors.white,
              width: '100%',
              marginTop: moderateScale(45),
            }}>
            <TouchableOpacity onPress={closeModal}>
              <Image
                source={images.Close}
                style={{
                  width: moderateScale(20),
                  height: moderateScale(20),
                  alignSelf: 'flex-end',
                  marginHorizontal: moderateScale(10),
                }}
              />
            </TouchableOpacity>
            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                marginHorizontal: moderateScale(20),
              }}>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Headline style={styles.heading}> Select a Category</Headline>
              </View>
              <FlatList
                data={categories}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => selectCategoryHandler(item)}>
                      <Text key={item._id} style={styles.text}>
                        {item.category}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </Modal>
      </WrapperContainer>
    </View>
  );
};

export default SelectComponent;
