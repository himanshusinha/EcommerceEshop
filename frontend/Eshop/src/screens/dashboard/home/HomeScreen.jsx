import React, {useEffect, useState} from 'react';
import {View, FlatList, Modal, Image} from 'react-native';
import WrapperContainer from '../../../components/WrapperContainer/WrapperContainer';
import Header from '../../../components/Header/Header';
import ItemCategories from '../../../components/List/ItemCategories/ItemCategories';
import styles from './styles';
import ItemProducts from '../../../components/List/ItemProducts/ItemProducts';
import {
  getAdminProductAsyncThunk,
  getCategoriesThunk,
} from '../../../redux/asyncThunk/authAsyncThunk';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../../components/Loader/Loader';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import routes from '../../../constants/routes';
import {addToCart} from '../../../redux/slices/cart.slice';
import images from '../../../constants/images';
const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoriesList, setCategoriesList] = useState([]);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const products = useSelector(state => state?.adminProduct?.products);
  const mappedProducts = products?.products?.map(product => ({
    id: product._id,
    name: product.name,
    description: product.description,
    price: product.price,
    stock: product.stock,
    imageUrl: product.images[0]?.url,
    categoryId: product.category._id,
  }));

  const filteredProducts = selectedCategory
    ? mappedProducts?.filter(product => product.categoryId === selectedCategory)
    : mappedProducts;

  useEffect(() => {
    setIsLoading(true);
    dispatch(getCategoriesThunk())
      .unwrap()
      .then(res => {
        console.log(res?.data, '...res from categories thunk');
        setCategoriesList(res?.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  const handleCategoryPress = item => {
    setSelectedCategory(prevCategory => {
      if (prevCategory === item._id) {
        return ''; // Unselect the category if it was already selected
      }
      return item._id; // Select the category if it wasn't selected
    });
  };

  const renderCategoryItem = ({item}) => {
    return (
      <ItemCategories
        item={item}
        isSelected={selectedCategory === item._id}
        onPress={() => handleCategoryPress(item)}
      />
    );
  };

  const renderProductItem = ({item}) => {
    if (selectedCategory && item.categoryId !== selectedCategory) {
      return null;
    }

    const handleProductPress = () => {
      const {id, name, price, imageUrl} = item;
      const cartItem = {
        id,
        name,
        price,
        image: imageUrl,
        quantity: 1,
      };
      dispatch(addToCart(cartItem));
    };

    return (
      <View style={{paddingRight: 40, position: 'relative'}}>
        <ItemProducts item={item} onPress={handleProductPress} />
        <Image
          source={{uri: item.imageUrl}}
          style={{
            width: 150,
            height: 200,
            top: 100,
            right: 20,
            position: 'absolute',
          }}
        />
      </View>
    );
  };

  return (
    <WrapperContainer>
      {isLoading ? (
        <Modal>
          <Loader />
        </Modal>
      ) : null}
      <Header
        title="Our Products"
        name={images.Search}
        onPress={() => navigation.navigate(routes.SEARCH_SCREEN)}
      />

      <View style={styles.flatListContainer}>
        <FlatList
          bounces={false}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categoriesList.categories}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.id}
        />
        <FlatList
          bounces={false}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={filteredProducts}
          renderItem={renderProductItem}
          keyExtractor={item => item.id}
        />
      </View>
    </WrapperContainer>
  );
};
export default HomeScreen;
