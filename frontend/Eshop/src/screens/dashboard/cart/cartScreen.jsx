import {View, FlatList, Text, Image} from 'react-native';
import React from 'react';
import WrapperContainer from '../../../components/WrapperContainer/WrapperContainer';
import ItemCart from '../../../components/List/ItemCart/ItemCart';
import styles from './styles';
import ButtonComp from '../../../components/Button/ButtonComp';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from '../../../styles/responsiveSize';
import routes from '../../../constants/routes';

const cartScreen = () => {
  const {cart} = useSelector(state => state?.cart);
  console.log(cart, '...........cart items');
  const navigation = useNavigation();

  let totalPrice = 0;
  cart.forEach(item => {
    totalPrice += item.price * item.quantity;
  });
  const renderItem = ({item}) => {
    console.log('Rendering item:', item);
    return (
      <ItemCart
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
        description={item.description}
        image={item.image}
        stock={item.stock}
        category={item.category}
      />
    );
  };

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
        <FlatList
          bounces={false}
          showsVerticalScrollIndicator={false}
          data={cart}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <View
          style={{
            bottom: moderateScale(50),
            marginHorizontal: moderateScale(20),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.totalText}>{cart.length} Items</Text>
          <Text style={styles.totalText}>Total: ₹ {totalPrice}</Text>
        </View>
        <View style={{marginHorizontal: moderateScale(20)}}>
          <ButtonComp
            style={{width: '100%', bottom: moderateScale(40)}}
            text="Checkout"
            onPress={() => navigation.navigate(routes.CONFIRM_ORDER_SCREEN)}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default cartScreen;
