// LoginScreen.js
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import TextInputWithLabel from '../../../components/TextInputWithLabel/TextInputWithLabel';
import colors from '../../../constants/colors';
import styles from './styles';
import routes from '../../../constants/routes';
import WrapperContainer from '../../../components/WrapperContainer/WrapperContainer';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <WrapperContainer>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <View>
                <Text style={styles.heading}>Login</Text>
                <TextInputWithLabel
                  mode="outlined"
                  label="Email"
                  placeholder="Please Enter Email"
                  outlineColor={colors.color1_light2}
                  activeOutlineColor={colors.color1_light2}
                  textColor={colors.blackOpacity30}
                  style={{marginTop: 20}}
                  value={email}
                  autoCapitalize={'none'}
                  onChangeText={e => setEmail(e)}
                />
              </View>
              <View style={{marginVertical: 20}}>
                <TextInputWithLabel
                  mode="outlined"
                  label="Password"
                  placeholder="Please Enter Password"
                  outlineColor={colors.color1_light2}
                  activeOutlineColor={colors.color1_light2}
                  textColor={colors.blackOpacity30}
                  style={styles.inputStyle}
                  value={password}
                  autoCapitalize={'none'}
                  onChangeText={e => setPassword(e)}
                />
              </View>
              <TouchableOpacity style={styles.forgotStyle}>
                <Text style={styles.signUpText}>Forgot Password ?</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomContainer}>
              <Text style={styles.signUpText}>Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate(routes.SIGN_UP_SCREEN)}>
                <Text style={styles.signUpButton}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </WrapperContainer>
  );
};

export default LoginScreen;
