import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import images from '../../constants/images';
import routes from '../../constants/routes';
import {useNavigation} from '@react-navigation/native';
import colors from '../../constants/colors';
import {
  getProfileAsyncThunk,
  logOutAsyncThunk,
} from '../../redux/asyncThunk/authAsyncThunk';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';

const CustomDrawer = props => {
  const selectedRouteName = props.state.routes[props.state.index].name;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [profile, setProfile] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    getProfile();
  }, []);
  const logOut = () => {
    dispatch(logOutAsyncThunk())
      .unwrap()
      .then(res => {
        if (res && res.status === 200) {
          Toast.show({
            type: 'success',
            text1: res.data.message,
          });
          navigation.navigate(routes.LOGIN_SCREEN);
        }
      })
      .catch(err => {
        Toast.show({
          type: 'success',
          text1: err.data.message,
        });
      });
  };

  const getProfile = () => {
    dispatch(getProfileAsyncThunk())
      .unwrap()
      .then(res => {
        if (res && res.status === 200) {
          const userProfile = res.data.user;
          setProfile(userProfile.avatar.url);
          setName(userProfile.name);
          setEmail(userProfile.email);
        }
      })
      .catch(err => {
        console.error(err); // Log any potential errors
      });
  };
  return (
    <ScrollView
      style={{flex: 1}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: colors.themeColor,
        }}>
        <ImageBackground source={images.Menu_Bg} style={{padding: 20}}>
          <Pressable onPress={() => navigation.navigate(routes.PROFILE_SCREEN)}>
            <Image
              source={profile ? {uri: profile} : images.Profile}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                marginBottom: 10,
              }}
            />
          </Pressable>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
            {name}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Roboto-Regular',
                marginRight: 5,
              }}>
              {email}
            </Text>
          </View>
        </ImageBackground>
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            paddingTop: 10,
            paddingStart: 20,
          }}>
          {/* Render "Home" item with conditional background color */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(routes.HOME_SCREEN); // Navigate to the HomeScreen
            }}
            style={{
              paddingVertical: 15,
              backgroundColor: '#fff',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Ionicons name="home-outline" size={22} />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Roboto-Medium',
                  marginLeft: 5,
                  color: 'black',
                }}>
                Home
              </Text>
            </View>
          </TouchableOpacity>

          {/* Render "More" item with conditional background color */}
          <TouchableOpacity
            onPress={() => {}}
            style={{
              paddingVertical: 15,
              backgroundColor:
                selectedRouteName === 'More' ? 'red' : 'transparent',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Ionicons name="ellipsis-horizontal" size={22} />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Roboto-Medium',
                  marginLeft: 5,
                  color: selectedRouteName === 'More' ? 'white' : 'black',
                }}>
                More
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => logOut()}
          style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CustomDrawer;
