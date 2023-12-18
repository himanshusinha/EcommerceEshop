import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import images from '../../../constants/images';
import {moderateScale} from 'react-native-size-matters';
import {textScale} from '../../../styles/responsiveSize';
import colors from '../../../constants/colors';
import {useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import ItemAdminCategories from '../../../components/List/ItemAdminCategories/ItemAdminCategories';
import {getCategoriesThunk} from '../../../redux/asyncThunk/authAsyncThunk';
import AddCategoriesComp from '../../../components/Modal/AddCategoriesComp';

const AdminCategoriesScreen = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const [categories, setCategories] = useState([]);
  const [existingCategories, setExistingCategories] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetchData();
  }, [isFocused]);

  const fetchData = async () => {
    try {
      const res = await dispatch(getCategoriesThunk()).unwrap();
      const fetchedCategories = res?.data?.categories || [];

      const uniqueCategories = fetchedCategories.filter(
        (category, index, self) =>
          index ===
          self.findIndex(c => c && category && c._id === category._id),
      );

      setCategories(uniqueCategories);
      setExistingCategories(res?.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addCategory = newCategory => {
    if (!categories.some(category => category._id === newCategory._id)) {
      setCategories(prevCategories => [...prevCategories, newCategory]);
    }
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: moderateScale(8),
          padding: moderateScale(5),
        }}>
        <Text
          style={{
            flex: 1,
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: textScale(16),
            color: colors.BLACK,
            fontWeight: 'bold',
            marginStart: moderateScale(10),
          }}>
          Add Categories
        </Text>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Image
            style={{width: moderateScale(20), height: moderateScale(20)}}
            source={images.Add}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={categories}
        keyExtractor={item => item._id}
        renderItem={({item, index}) => (
          <ItemAdminCategories
            item={item}
            index={index}
            existingCategories={existingCategories}
          />
        )}
      />
      <AddCategoriesComp
        visible={visible}
        onCancel={() => setVisible(false)}
        onAddCategory={addCategory}
      />
    </View>
  );
};

export default AdminCategoriesScreen;
