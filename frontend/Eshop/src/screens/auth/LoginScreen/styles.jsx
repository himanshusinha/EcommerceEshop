import {StyleSheet, Platform} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  scale,
} from '../../../styles/responsiveSize';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  inputStyle: {
    marginBottom: moderateScaleVertical(20),
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inputContainer: {
    flex: 0.8,
    backgroundColor: colors.white,
    justifyContent: 'center',
    marginHorizontal: moderateScaleVertical(20),
  },
  heading: {
    marginVertical: moderateScale(50),
    alignSelf: 'center',
    fontSize: moderateScale(30),
    fontWeight: 'bold',
    color: colors.black,
  },
  inputStyle: {
    marginBottom: moderateScaleVertical(10),
  },
  bottomContainer: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  signUpText: {
    fontSize: scale(14),
    fontWeight: '400',
    color: colors.black,
  },
  signUpButton: {
    color: colors.black,
    fontSize: scale(14),
    fontWeight: 'bold',
  },
  forgotStyle: {alignItems: 'flex-end'},
});
export default styles;
