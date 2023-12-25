import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import React from 'react';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import colors from '../../../constants/colors';
import fontFamily from '../../../styles/fontFamily';
import {useNavigation} from '@react-navigation/native';
import routes from '../../../constants/routes';
import images from '../../../constants/images';
import {deleteAdminProductByIdThunk} from '../../../redux/asyncThunk/authAsyncThunk';
import {useDispatch} from 'react-redux';
import Toast from 'react-native-toast-message';

const ItemAdminViewProducts = ({item, index}) => {
  const id = item._id;
  console.log(item._id, '.......item id');
  console.log(item.images[0]);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleDelete = async () => {
    try {
      const res = await dispatch(
        deleteAdminProductByIdThunk({id: id}),
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

  return (
    <View
      style={{
        marginHorizontal: moderateScale(20),
        elevation: 5, // Add elevation for Android
        shadowColor: colors.BLACK, // Add shadow color for iOS
        shadowOffset: {width: 0, height: 2}, // Add shadow offset for iOS
        shadowOpacity: 0.3, // Add shadow opacity for iOS
        shadowRadius: 2, // Add shadow radius for iOS
      }}>
      <Pressable
        onPress={() =>
          navigation.navigate(routes.PRODUCT_DETAILS_SCREEN, {
            id: item._id,
            imageUrl: item.images[0]?.url,
          })
        }
        style={{
          flexDirection: 'row',
          backgroundColor: index % 2 === 0 ? colors.themeColor : colors.color5,
          marginVertical: moderateScale(4),
          padding: moderateScale(20),
          borderRadius: moderateScale(10),
          justifyContent: 'space-between',
        }}>
        <Image
          resizeMode="contain"
          source={{uri: item.images[0]?.url}}
          style={{
            width: 80,
            height: 80,
            alignSelf: 'center',
          }}
        />
        <View style={{flex: 1, marginHorizontal: moderateScale(20)}}>
          <Text
            style={{
              color: index % 2 === 0 ? colors.WHITE : colors.BLACK,
              fontSize: textScale(14),
              fontFamily: fontFamily.bold,
            }}>
            {item?.category?.category}
          </Text>
          <Text
            style={{
              color: index % 2 === 0 ? colors.WHITE : colors.BLACK,
              fontFamily: fontFamily.regular,
            }}>
            {item?.price}
          </Text>
          <Text
            style={{
              color: index % 2 === 0 ? colors.WHITE : colors.BLACK,
              fontFamily: fontFamily.regular,
            }}>
            {item?.name}
          </Text>
          <Text
            style={{
              color: index % 2 === 0 ? colors.WHITE : colors.BLACK,
              fontFamily: fontFamily.regular,
            }}>
            {item?.description?.length > 22
              ? `${item?.description?.slice(0, 22)}...`
              : item?.description}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(routes.ADMIN_EDIT_PRODUCTS_SCREEN, {
              id: item?._id,
              imageURL: item?.images[0]?.url,
            })
          }>
          <Image
            style={{
              width: moderateScale(20),
              height: moderateScale(20),
              alignSelf: 'center',
            }}
            source={index % 2 == 0 ? images.Edit_Light : images.Edit}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleDelete}>
          <Image
            style={{
              width: moderateScale(20),
              height: moderateScale(20),
              alignSelf: 'center',
              marginStart: moderateScale(10),
            }}
            source={index % 2 == 0 ? images.Trash_Light : images.Trash_Can}
          />
        </TouchableOpacity>
      </Pressable>
    </View>
  );
};

export default ItemAdminViewProducts;
