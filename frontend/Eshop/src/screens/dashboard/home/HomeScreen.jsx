import React, {useEffect, useState} from 'react';
import {View, FlatList, Modal} from 'react-native';
import WrapperContainer from '../../../components/WrapperContainer/WrapperContainer';
import Header from '../../../components/Header/Header';
import ItemCategories from '../../../components/List/ItemCategories/ItemCategories';
import styles from './styles';
import ItemProducts from '../../../components/List/ItemProducts/ItemProducts';
import {getAdminProductAsyncThunk} from '../../../redux/asyncThunk/authAsyncThunk';
import {useDispatch} from 'react-redux';
import Loader from '../../../components/Loader/Loader';
import {useIsFocused} from '@react-navigation/native';

const HomeScreen = () => {
  const [selectedItem, setSelectedItem] = useState();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const handleItemPress = categoryId => {
    setSelectedItem(categoryId);
    const filtered = products.filter(
      product => product.category?._id === categoryId,
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(getAdminProductAsyncThunk())
      .unwrap()
      .then(res => {
        const fetchedCategories = res?.data?.products?.map(
          product => product.category,
        );

        const uniqueCategories = fetchedCategories.filter(
          (category, index, self) =>
            index ===
            self.findIndex(c => c && category && c._id === category._id),
        );

        setCategories(uniqueCategories);
        setProducts(res?.data?.products);
        setFilteredProducts(res?.data?.products);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, [isFocused]);

  return (
    <WrapperContainer>
      {isLoading ? (
        <Modal>
          <Loader />
        </Modal>
      ) : null}
      <View>
        <Header title="Our Products" />
        <FlatList
          contentContainerStyle={styles.listStyle}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({item}) => {
            return (
              <ItemCategories
                item={item}
                isSelected={selectedItem === item._id}
                onPress={() => handleItemPress(item._id)}
              />
            );
          }}
        />
        <FlatList
          contentContainerStyle={styles.listStyle}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={filteredProducts}
          renderItem={({item, index}) => {
            return <ItemProducts item={item} index={index} />;
          }}
        />
      </View>
    </WrapperContainer>
  );
};

export default HomeScreen;
