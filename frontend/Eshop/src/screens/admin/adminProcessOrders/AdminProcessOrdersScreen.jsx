import React, {useEffect, useState} from 'react';
import {FlatList, Modal, View} from 'react-native';
import {getAdminOrderAsyncThunk} from '../../../redux/asyncThunk/authAsyncThunk';
import {useDispatch} from 'react-redux';
import WrapperContainer from '../../../components/WrapperContainer/WrapperContainer';
import Loader from '../../../components/Loader/Loader';
import ItemAdminProcessOrders from '../../../components/List/ItemAdminProcessOrders/ItemAdminProcessOrders';
const AdminProcessOrdersScreen = () => {
  const dispatch = useDispatch();
  const [ordersList, setOrdersList] = useState([]);
  const [ordersId, setOrdersId] = useState([]);
  console.log(ordersId, '.......orders Id');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    dispatch(getAdminOrderAsyncThunk())
      .unwrap()
      .then(res => {
        console.log(res?.data, '......res from process order thunk');
        const ids = res?.data?.orders?.map(order => order?._id);
        setOrdersList(res?.data?.orders);
        setOrdersId(ids);
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
            <ItemAdminProcessOrders
              item={item}
              index={index}
             />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </WrapperContainer>
  );
};
export default AdminProcessOrdersScreen;
