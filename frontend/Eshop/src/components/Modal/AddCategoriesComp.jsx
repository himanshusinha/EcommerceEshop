import React, {useState} from 'react';
import {
  View,
  Modal,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Alert,
} from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';
import {moderateScale} from '../../styles/responsiveSize';
import images from '../../constants/images';
import ButtonComp from '../Button/ButtonComp';
import {addAdminCategoriesThunk} from '../../redux/asyncThunk/authAsyncThunk';
import {useDispatch} from 'react-redux';
import Toast from 'react-native-toast-message';

const AddCategoriesComp = props => {
  const dispatch = useDispatch();
  const {onCancel, visible} = props;
  const [categoriesList, setCategoriesList] = useState([]);

  const [categories, setCategories] = useState('');
  const [existingCategories, setExistingCategories] = useState([]);
  const checkValidation = () => {
    if (!categories || (categories && categories.length === 0)) {
      Toast.show({
        type: 'error',
        text1: 'Please enter categories',
      });
    } else if (existingCategories.includes(categories.trim())) {
      // Check if the entered category already exists
      Toast.show({
        type: 'error',
        text1: 'Category already exists',
      });
    } else {
      addCategories();
    }
  };

  const addCategories = async () => {
    try {
      const response = await dispatch(
        addAdminCategoriesThunk(categories),
      ).unwrap();

      if (response && response.data) {
        const fetchedCategories = response.data;

        if (Array.isArray(fetchedCategories)) {
          const uniqueCategories = fetchedCategories.filter(
            (category, index, self) =>
              index ===
              self.findIndex(c => c && category && c._id === category._id),
          );

          setCategories(uniqueCategories);
          setCategoriesList(response.data);
          // Update the existing categories list
          setExistingCategories(prev => [
            ...prev,
            ...uniqueCategories.map(c => c.trim()), // Trim categories for consistency
          ]);
          props.onCancel();
          setCategories('');
        } else {
          console.error(
            'Fetched categories is not an array:',
            fetchedCategories,
          );
        }
      } else {
        console.error('Unexpected response structure:', response);
      }
    } catch (err) {
      console.error(err);
    }
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

export default AddCategoriesComp;
