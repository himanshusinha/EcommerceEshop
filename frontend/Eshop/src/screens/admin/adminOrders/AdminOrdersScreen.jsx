import React, {useEffect, useState} from 'react';
import {FlatList, Modal, View} from 'react-native';
import {getAdminOrderAsyncThunk} from '../../../redux/asyncThunk/authAsyncThunk';
import {useDispatch} from 'react-redux';
import WrapperContainer from '../../../components/WrapperContainer/WrapperContainer';
import ItemAdminOrders from '../../../components/List/ItemAdminOrders/ItemAdminOrders';
import Loader from '../../../components/Loader/Loader';
const AdminOrdersScreen = () => {
  const dispatch = useDispatch();
  const [ordersList, setOrdersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    dispatch(getAdminOrderAsyncThunk())
      .unwrap()
      .then(res => {
        console.log(res, '......res from orders thunk');
        setOrdersList(res?.data?.orders);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <WrapperContainer>
      {isLoading ? (
        <Modal>
          <Loader />
        </Modal>
      ) : null}
      <View>
        <FlatList
          bounces={false}
          showsVerticalScrollIndicator={false}
          data={ordersList}
          renderItem={({item, index}) => (
            <ItemAdminOrders item={item} index={index} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </WrapperContainer>
  );
};
export default AdminOrdersScreen;
