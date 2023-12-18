// AdminViewProductScreen.js
import React, {useEffect, useState} from 'react';
import {View, FlatList, Modal, TouchableWithoutFeedback} from 'react-native';
import Chart from '../../../components/Chart/Chart';
import WrapperContainer from '../../../components/WrapperContainer/WrapperContainer';
import {getAdminProductAsyncThunk} from '../../../redux/asyncThunk/authAsyncThunk';
import {useDispatch} from 'react-redux';
import ItemAdminViewProducts from '../../../components/List/ItemAdminViewProducts/ItemAdminViewProducts';
import Loader from '../../../components/Loader/Loader';
import UpdateProductComp from '../../../components/Modal/UpdateProductComp'; // Assuming the correct import path

const AdminViewProductScreen = () => {
  const [adminProducts, setAdminProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState('');
  const [inStockCount, setInStockCount] = useState(0);
  const [outOfStockCount, setOutOfStockCount] = useState(10);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await dispatch(getAdminProductAsyncThunk()).unwrap();
        const fetchedCategories = res?.data?.products?.map(
          product => product.category,
        );
        setAdminProducts(res?.data?.products);
        setCategories(fetchedCategories);

        const firstProduct = res?.data?.products[0];

        const inStockCount = firstProduct?.stock > 0 ? 1 : 0;
        const outOfStockCount = 10;

        setInStockCount(inStockCount);
        setOutOfStockCount(outOfStockCount);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <WrapperContainer>
      {isLoading ? (
        <Modal>
          <Loader />
        </Modal>
      ) : null}
      <View>
        <View>
          <Chart
            inStockCount={inStockCount}
            outOfStockCount={outOfStockCount}
          />
        </View>
        <View>
          <FlatList
            data={adminProducts}
            renderItem={({item, index}) => (
              <ItemAdminViewProducts item={item} index={index} />
            )}
            keyExtractor={item => item._id}
          />
        </View>
      </View>

      <UpdateProductComp
        onCancel={() => setVisible(false)}
        visible={visible}
        categories={categories}
        setCategories={setCategories}
      />
    </WrapperContainer>
  );
};

export default AdminViewProductScreen;
