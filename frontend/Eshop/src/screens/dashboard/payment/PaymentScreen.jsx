import React, {useEffect, useState} from 'react';
import {View, Alert} from 'react-native';
import RadioButton from '../../../components/RadioButton/RadioButton';
import styles from './styles';
import ButtonComp from '../../../components/Button/ButtonComp';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {
  createAdminOrderAsyncThunk,
  getProfileAsyncThunk,
} from '../../../redux/asyncThunk/authAsyncThunk';
import {useRoute} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const PaymentScreen = () => {
  // State variables
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [pinCode, setPinCode] = useState('');
  const {cart} = useSelector(state => state.cart);
  console.log(cart, '.........cart');
  const route = useRoute();
  const dispatch = useDispatch();

  useEffect(() => {
    getProfile();
  }, []);

  // Fetch user profile
  const getProfile = () => {
    dispatch(getProfileAsyncThunk())
      .unwrap()
      .then(res => {
        if (res && res.status === 200) {
          const userProfile = res.data.user;
          setAddress(userProfile.address);
          setCity(userProfile.city);
          setCountry(userProfile.country);
          setPinCode(userProfile.pinCode);
        }
      })
      .catch(err => {
        console.error('Error fetching profile:', err);
        Alert.alert('Error', 'Failed to fetch user profile. Please try again.');
      });
  };

  // Handle payment method selection
  const handleSelectOption = option => {
    setPaymentMethod(option);
  };

  // Handle order placement
  const codHandler = () => {
    const shippingInfo = {
      address,
      city,
      country,
      pinCode,
    };

    let paymentInfo;
    if (paymentMethod === 'COD') {
      paymentInfo = {
        method: 'COD',
      };
    } else if (paymentMethod === 'Online') {
      paymentInfo = {
        method: 'Online',
      };
    }

    const orderItems = cart.map(product => ({
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      image: product.image,
      product: product.id,
    }));

    try {
      dispatch(
        createAdminOrderAsyncThunk({
          shippingInfo,
          orderItems,
          paymentMethod,
          itemsPrice: route.params.itemsPrice,
          taxPrice: route.params.taxPrice,
          shippingCharges: route.params.shippingCharges,
          totalAmount: route.params.totalAmount,
          paymentInfo,
        }),
      ).then(response => {
        console.log(response);
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Order placed successfully!',
          topOffset: moderateScale(90),
        });
      });
    } catch (error) {
      console.error('Error creating order:', error);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Failed to place order. Please try again.',
        topOffset: moderateScale(90),
      });
    }
  };

  return (
    <View style={styles.container}>
      <RadioButton
        options={['COD', 'Online']}
        selectedOption={paymentMethod}
        onSelect={handleSelectOption}
      />
      <View
        style={{
          flex: 0.3,
          justifyContent: 'flex-end',
          width: '100%',
          marginTop: moderateScale(30),
        }}>
        <ButtonComp text="Place Order" onPress={codHandler} />
      </View>
    </View>
  );
};

export default PaymentScreen;
