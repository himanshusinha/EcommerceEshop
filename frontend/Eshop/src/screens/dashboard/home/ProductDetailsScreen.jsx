import {FlatList, Image, Modal, ScrollView, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useIsFocused, useRoute} from '@react-navigation/native';
import {getProductDetailsByIdThunk} from '../../../redux/asyncThunk/authAsyncThunk';
import {useDispatch} from 'react-redux';
import Loader from '../../../components/Loader/Loader';
import colors from '../../../constants/colors';
import styles from './styles';
import ButtonComp from '../../../components/Button/ButtonComp';
import {moderateScale} from '../../../styles/responsiveSize';

const ProductDetailsScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const route = useRoute();
  const dispatch = useDispatch();
  const id = route?.params?.id;
  const [productDetails, setProductDetails] = useState({});
  const [name, setName] = useState('');
  const isFocused = useIsFocused();
  const [description, setDescription] = useState('');

  useEffect(() => {
    setIsLoading(true);
    dispatch(getProductDetailsByIdThunk({id: id}))
      .unwrap()
      .then(res => {
        console.log(res?.data?.product, '....response from product details');
        setProductDetails(res?.data?.product);
        setName(res?.data?.product.name);
        setDescription(res?.data?.product.description);

        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, [isFocused]);
  const imagesArray = productDetails.images;
  console.log(imagesArray, '.........array of images');

  return (
    <View
      style={{
        backgroundColor: colors.DARK_GRAY,
      }}>
      {isLoading ? (
        <Modal>
          <Loader />
        </Modal>
      ) : null}
      <View
        style={{
          backgroundColor: colors.WHITE,
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={imagesArray}
            contentContainerStyle={{
              flexGrow: 1,
              paddingLeft: moderateScale(10),
              paddingRight: moderateScale(10),
              justifyContent: 'center',
              alignItems: 'center',
            }}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    width: 200,
                    height: 200,
                    marginTop: moderateScale(20),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={{uri: item.url}}
                    style={{
                      width: 200,
                      height: 200,
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <ScrollView
          style={{
            backgroundColor: colors.WHITE,
            height: moderateScale(350),
            marginHorizontal: moderateScale(20),
          }}>
          <Text>{name}</Text>
          <Text>{description}</Text>
        </ScrollView>
        <View style={styles.btnRowStyle}>
          <View
            style={{
              flex: 0.6,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ButtonComp text="Add to cart" />
          </View>
          <View
            style={{
              flex: 0.4,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginHorizontal: 10,
            }}>
            <ButtonComp text="-" style={styles.btnCompStyle} />
            <Text style={styles.btnCountStyle}>0</Text>
            <ButtonComp text="+" style={styles.btnCompStyle} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;
