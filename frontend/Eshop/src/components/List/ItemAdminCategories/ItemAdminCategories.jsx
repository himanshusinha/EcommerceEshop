import {useEffect, useState} from 'react';
import colors from '../../../constants/colors';
import images from '../../../constants/images';
import {moderateScale} from '../../../styles/responsiveSize';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  deleteAdminCategoriesByIdThunk,
  getCategoriesThunk,
} from '../../../redux/asyncThunk/authAsyncThunk';
import {useIsFocused} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import Loader from '../../Loader/Loader';

const ItemAdminCategories = ({item, index}) => {
  const id = item._id;
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [existingCategories, setExistingCategories] = useState([]);

  const handleDelete = async () => {
    try {
      const res = await dispatch(
        deleteAdminCategoriesByIdThunk({id: id}),
      ).unwrap();
      console.log(res, '...deleted successfully');
      Toast.show({
        type: 'success',
        text1: res.data.message,
      });
      fetchData();
    } catch (err) {
      console.log(err);
      // Handle error, if needed
    }
  };

  useEffect(() => {
    fetchData();
  }, [isFocused]);

  const fetchData = async () => {
    setIsLoading(true);
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
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  return (
    <View>
      {isLoading ? (
        <Modal>
          <Loader />
        </Modal>
      ) : null}
      <View
        style={{
          width: '96%',
          flexDirection: 'row',
          marginHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            backgroundColor: index % 2 == 0 ? colors.themeColor : colors.GRAY,
            marginTop: moderateScale(20),
            padding: moderateScale(20),
            width: '94%',
            borderRadius: moderateScale(10),
            elevation: 5,
            shadowColor: colors.BLACK,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 2,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              flex: 1,
              color: index % 2 == 0 ? colors.WHITE : colors.BLACK,
            }}>
            {item.category}
          </Text>
          <TouchableOpacity onPress={handleDelete}>
            <Image
              style={{width: moderateScale(20), height: moderateScale(20)}}
              source={index % 2 == 0 ? images.Trash_Light : images.Trash_Can}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default ItemAdminCategories;
