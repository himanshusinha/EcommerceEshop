import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';
import WrapperContainer from '../../../components/WrapperContainer/WrapperContainer';
import Search from '../../../components/Search/Search';
import styles from './styles';
import {getAdminProductAsyncThunk} from '../../../redux/asyncThunk/authAsyncThunk';
import {useDispatch} from 'react-redux';
import Loader from '../../../components/Loader/Loader';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {textScale} from '../../../styles/responsiveSize';
import colors from '../../../constants/colors';
import routes from '../../../constants/routes';

const SearchScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [categories, setCategories] = useState([]);
  const isFocused = useIsFocused();
  const [images, setImages] = useState([]);
  const navigation = useNavigation();
  console.log(searchQuery, '........searchQuery');
  useEffect(() => {
    setIsLoading(true);
    dispatch(getAdminProductAsyncThunk())
      .unwrap()
      .then(res => {
        const fetchedCategories = res?.data?.products?.map(
          product => product.category,
        );
        const productsData = res?.data?.products;
        const productIds = res.data.products.map(product => product._id);

        const uniqueCategories = fetchedCategories.filter(
          (category, index, self) =>
            index ===
            self.findIndex(c => c && category && c._id === category._id),
        );

        const productImages = productsData.map(
          product => product.images[0]?.url,
        );

        setImages(productImages);
        setCategories(uniqueCategories);
        setProducts(productsData);
        setFilteredData(productsData);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, [isFocused]);

  const handleSearch = text => {
    const filteredResults = products.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );

    const productImages = filteredResults.map(
      product => product.images[0]?.url,
    );

    setFilteredData(filteredResults);
    setImages(productImages);
    setSearchQuery(text);
  };
  return (
    <WrapperContainer>
      {isLoading && (
        <Modal>
          <Loader />
        </Modal>
      )}
      <View style={styles.container}>
        <Search
          placeholder={'Search'}
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <FlatList
          bounces={false}
          data={filteredData}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: filteredData.length > 1 ? 40 : 20,
          }}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(routes.PRODUCT_DETAILS_SCREEN, {
                  id: item?._id,
                });
              }}
              style={styles.listItem}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={{uri: images[index]}}
              />
              <View style={styles.textContainer}>
                <Text style={{fontSize: textScale(14), color: colors.BLACK}}>
                  {item.name}
                </Text>
                <Text
                  style={{fontSize: textScale(10), color: colors.DARK_GRAY}}>
                  {item.description.length > 40
                    ? `${item.description.slice(0, 40)}...`
                    : item.description}
                </Text>
                <Text
                  style={{fontSize: textScale(12), color: colors.DARK_GRAY}}>
                  Rs {item.price}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </WrapperContainer>
  );
};

export default SearchScreen;
