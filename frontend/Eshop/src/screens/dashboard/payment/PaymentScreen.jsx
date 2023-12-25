import React, {useEffect, useState} from 'react';
import {View, Alert, Modal, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import ButtonComp from '../../../components/Button/ButtonComp';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {
  createAdminOrderAsyncThunk,
  getProfileAsyncThunk,
} from '../../../redux/asyncThunk/authAsyncThunk';
import {useNavigation, useRoute} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {useStripe} from '@stripe/stripe-react-native';
import axios from 'axios';
import Loader from '../../../components/Loader/Loader';
import colors from '../../../constants/colors';
import {Button, RadioButton} from 'react-native-paper';
import routes from '../../../constants/routes';
import {clearCart} from '../../../redux/slices/cart.slice';
const PaymentScreen = () => {
  // State variables
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [pinCode, setPinCode] = useState('');
  const {isAuthenticated, cart} = useSelector(state => state.cart);
  console.log(cart, '.........cart');
  const route = useRoute();
  const dispatch = useDispatch();
  const stripe = useStripe();
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    getProfile();
  }, []);
  const redirectToLogin = () => {
    navigation.navigate(routes.LOGIN_SCREEN);
  };
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

  const handlePayment = () => {
    if (cart.length === 0) {
      Toast.show({
        type: 'error',
        text1: 'Cart is Empty',
        text2: 'Please add items to the cart before proceeding with payment.',
      });
      return;
    }

    if (paymentMethod === 'COD') {
      codHandler();
    } else {
      onlineHandler();
    }
  };

  //cod handler
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
        dispatch(clearCart());
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
  //onlinehandler
  const onlineHandler = async () => {
    try {
      const {
        data: {client_secret},
      } = await axios.post(
        'https://eshop-dqns.onrender.com/api/v1/order/payment',
        {
          totalAmount: route.params.totalAmount,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        },
      );
      console.log('Received client_secret:', client_secret);

      const init = await stripe.initPaymentSheet({
        paymentIntentClientSecret: client_secret,
        merchantDisplayName: 'EasyShop',
      });

      if (init.error) {
        console.error('Stripe Init Error:', init.error);
        return Toast.show({
          type: 'error',
          text1: init.error.message,
        });
      }

      const presentSheet = await stripe.presentPaymentSheet();
      setIsLoading(true);

      if (presentSheet.error) {
        console.error('Stripe Present Error:', presentSheet.error);
        setIsLoading(false);
        return Toast.show({
          type: 'error',
          text1: presentSheet.error.message,
        });
      }

      const {paymentIntent} = await stripe.retrievePaymentIntent(client_secret);

      if (paymentIntent && paymentIntent.status === 'Succeeded') {
        codHandler({id: paymentIntent.id, status: paymentIntent.status});
        dispatch(clearCart());
        setIsLoading(false);
      } else {
        console.error('Payment Intent Error:', paymentIntent);
        setIsLoading(false);
        return Toast.show({
          type: 'error',
          text1: 'Payment was not successful.',
        });
      }
    } catch (error) {
      console.error('Online Payment Error:', error);
      setIsLoading(false);
      if (error.response) {
        console.error('Server Response Data:', error.response.data);
        console.error('Server Response Status:', error.response.status);
        console.error('Server Response Headers:', error.response.headers);
      } else if (error.request) {
        console.error('No Response Received:', error.request);
      } else {
        console.error('Error Setting Up Request:', error.message);
      }
      return Toast.show({
        type: 'error',
        text1:
          'An error occurred while processing the payment. Please try again.',
      });
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Modal>
          <Loader />
        </Modal>
      ) : null}

      <RadioButton.Group onValueChange={setPaymentMethod} value={paymentMethod}>
        <View style={styles.radioStyle}>
          <Text style={styles.radioStyleText}>Cash On Delivery</Text>
          <RadioButton color={colors.color1} value={'COD'} />
        </View>
        <View style={styles.radioStyle}>
          <Text style={styles.radioStyleText}>ONLINE</Text>
          <RadioButton color={colors.color1} value={'ONLINE'} />
        </View>
      </RadioButton.Group>
      <View
        style={{
          flex: 0.3,
          justifyContent: 'flex-end',
          width: '100%',
          marginTop: moderateScale(30),
        }}>
        <TouchableOpacity onPress={() => handlePayment()}>
          <Button
            style={styles.btn}
            textColor={colors.WHITE}
            icon={
              paymentMethod === 'COD'
                ? 'check-circle'
                : 'circle-multiple-outline'
            }>
            {paymentMethod === 'COD' ? 'Place Order' : 'Pay'}
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentScreen;
