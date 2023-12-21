import {View, FlatList, Text} from 'react-native';
import React from 'react';
import WrapperContainer from '../../../components/WrapperContainer/WrapperContainer';
import {searchData} from '../../../constants/list';
import ItemCart from '../../../components/List/ItemCart/ItemCart';
import styles from './styles';
import ButtonComp from '../../../components/Button/ButtonComp';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import routes from '../../../constants/routes';

const cartScreen = () => {
  const {cart} = useSelector(state => state?.cart);
  const navigation = useNavigation();

  let totalPrice = 0;
  cart.forEach(item => {
    totalPrice += item.price * item.quantity;
  });
  const renderItem = ({item}) => (
    <ItemCart
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      quantity={item.quantity}
      description={item.description}
      image={item.image}
      stock={item.stock}
      item={item}
    />
  );

  if (cart.length === 0) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.emptyCartText}>No items in cart</Text>
      </View>
    );
  }

  return (
    <WrapperContainer>
      <View style={{flex: 1}}>
        {/* <FlatList
          data={searchData}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: searchData.length > 1 ? 20 : 40,
          }}
          renderItem={({item, index}) => <ItemCart item={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.itemContainer}>
          <Text>5 Items</Text>
          <Text>Rs 1,50,000</Text>
        </View>
        <ButtonComp style={styles.buttonStyle} text="Checkout" /> */}
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cart}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>{cart.length} Items</Text>
          <Text style={styles.totalText}>Total: ₹ {totalPrice}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <ButtonComp
            title="Checkout"
            // onPress={() => navigation.navigate(routes.C)}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default cartScreen;
